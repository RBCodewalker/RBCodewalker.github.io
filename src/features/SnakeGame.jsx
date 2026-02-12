import React, { useState, useEffect, useCallback, useRef } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const GRID_SIZE = 24;
const CELL_SIZE = 16;
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 110;
const MAX_FOOD = 10;

function getRandomFood(snake) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
  return pos;
}

function SnakeGame() {
  const isMobile = useIsMobile();
  const cellSize = isMobile ? 11 : CELL_SIZE;

  const [gameState, setGameState] = useState('idle');
  const [tick, setTick] = useState(0);

  // All mutable game state lives in refs
  const snakeRef = useRef([{ x: 5, y: 5 }]);
  const foodRef = useRef({ x: 15, y: 10 });
  const dirRef = useRef(INITIAL_DIRECTION);
  const dirQueueRef = useRef([]);
  const scoreRef = useRef(0);
  const targetLenRef = useRef(1); // snake grows until it reaches this length
  const foodEatenRef = useRef(Array(MAX_FOOD).fill(false));
  const gameLoopRef = useRef(null);
  const gameStateRef = useRef('idle');
  const touchStartRef = useRef(null);

  const stopLoop = useCallback(() => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
  }, []);

  const startGame = useCallback(() => {
    stopLoop();
    const initialSnake = [{ x: 5, y: 5 }];
    snakeRef.current = initialSnake;
    const firstFood = getRandomFood(initialSnake);
    foodRef.current = firstFood;
    dirRef.current = INITIAL_DIRECTION;
    dirQueueRef.current = [];
    scoreRef.current = 0;
    targetLenRef.current = 1;
    foodEatenRef.current = Array(MAX_FOOD).fill(false);
    gameStateRef.current = 'playing';
    setGameState('playing');
    setTick(0);
  }, [stopLoop]);

  // Game loop — all logic uses refs, only setTick triggers re-render
  useEffect(() => {
    if (gameState !== 'playing') return;

    gameLoopRef.current = setInterval(() => {
      const prev = snakeRef.current;

      // Process next queued direction (skip if it would reverse into neck)
      while (dirQueueRef.current.length > 0) {
        const next = dirQueueRef.current.shift();
        const wouldReverse = prev.length > 1
          && prev[0].x + next.x === prev[1].x
          && prev[0].y + next.y === prev[1].y;
        if (!wouldReverse) {
          dirRef.current = next;
          break;
        }
      }

      const dir = dirRef.current;
      const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

      // Wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        stopLoop();
        gameStateRef.current = 'gameover';
        setGameState('gameover');
        return;
      }

      // Self collision
      if (prev.some((s) => s.x === head.x && s.y === head.y)) {
        stopLoop();
        gameStateRef.current = 'gameover';
        setGameState('gameover');
        return;
      }

      const newSnake = [head, ...prev];
      const currentFood = foodRef.current;

      // Check food collision
      if (head.x === currentFood.x && head.y === currentFood.y) {
        // Double: target length = 2x the length before this tick
        targetLenRef.current = Math.ceil(prev.length * 1.7);

        const newScore = scoreRef.current + 1;
        scoreRef.current = newScore;

        const newEaten = [...foodEatenRef.current];
        if (newScore - 1 < MAX_FOOD) newEaten[newScore - 1] = true;
        foodEatenRef.current = newEaten;

        // Check if all food eaten -> success
        if (newScore >= MAX_FOOD) {
          snakeRef.current = newSnake;
          stopLoop();
          gameStateRef.current = 'success';
          setGameState('success');
          setTick((t) => t + 1);
          return;
        }

        // Spawn new food
        foodRef.current = getRandomFood(newSnake);
      }

      // Trim to target length (keeps snake growing until it reaches target)
      while (newSnake.length > targetLenRef.current) {
        newSnake.pop();
      }
      snakeRef.current = newSnake;

      setTick((t) => t + 1);
    }, GAME_SPEED);

    return () => stopLoop();
  }, [gameState, stopLoop]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      const gs = gameStateRef.current;

      // Start/Restart on Enter/Space
      if (gs === 'idle' || gs === 'gameover' || gs === 'success') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startGame();
        }
        return;
      }

      if (gs !== 'playing') return;
      // Use last queued dir (or current dir) to validate against
      const queue = dirQueueRef.current;
      const lastDir = queue.length > 0 ? queue[queue.length - 1] : dirRef.current;
      let newDir = null;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (lastDir.y !== 1) newDir = { x: 0, y: -1 };
          e.preventDefault();
          break;
        case 'ArrowDown':
        case 's':
          if (lastDir.y !== -1) newDir = { x: 0, y: 1 };
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'a':
          if (lastDir.x !== 1) newDir = { x: -1, y: 0 };
          e.preventDefault();
          break;
        case 'ArrowRight':
        case 'd':
          if (lastDir.x !== -1) newDir = { x: 1, y: 0 };
          e.preventDefault();
          break;
        default:
          break;
      }
      if (newDir && queue.length < 3) {
        queue.push(newDir);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [startGame]);

  // Touch controls
  const handleTouchStart = (e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current || gameStateRef.current !== 'playing') return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    const queue = dirQueueRef.current;
    const lastDir = queue.length > 0 ? queue[queue.length - 1] : dirRef.current;

    let newDir = null;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 20 && lastDir.x !== -1) newDir = { x: 1, y: 0 };
      else if (dx < -20 && lastDir.x !== 1) newDir = { x: -1, y: 0 };
    } else {
      if (dy > 20 && lastDir.y !== -1) newDir = { x: 0, y: 1 };
      else if (dy < -20 && lastDir.y !== 1) newDir = { x: 0, y: -1 };
    }
    if (newDir && queue.length < 3) queue.push(newDir);
    touchStartRef.current = null;
  };

  // Arrow button handler
  const handleArrow = (d) => {
    if (gameStateRef.current !== 'playing') return;
    const queue = dirQueueRef.current;
    const lastDir = queue.length > 0 ? queue[queue.length - 1] : dirRef.current;
    let newDir = null;
    if (d === 'up' && lastDir.y !== 1) newDir = { x: 0, y: -1 };
    if (d === 'down' && lastDir.y !== -1) newDir = { x: 0, y: 1 };
    if (d === 'left' && lastDir.x !== 1) newDir = { x: -1, y: 0 };
    if (d === 'right' && lastDir.x !== -1) newDir = { x: 1, y: 0 };
    if (newDir && queue.length < 3) queue.push(newDir);
  };

  // Read from refs for rendering
  const snake = snakeRef.current;
  const food = foodRef.current;
  const score = scoreRef.current;
  const foodEaten = foodEatenRef.current;
  const boardSize = GRID_SIZE * cellSize;

  // Suppress unused var warning — tick drives re-renders
  void tick;

  const eyeSize = isMobile ? 2 : 3;
  const segSize = cellSize - 1;

  const gameBoard = (
    <div
      className="bg-ide-slate-800 rounded-ide-md relative shrink-0"
      style={{
        width: boardSize,
        height: boardSize,
        boxShadow: 'inset 1px 5px 11px rgba(2,18,27,0.71)',
      }}
    >
      {/* Snake */}
      {snake.map((seg, i) => {
        if (i === 0) {
          const d = dirRef.current;
          let e1, e2;
          if (d.x === 1) {
            e1 = { left: segSize - 5, top: 2 };
            e2 = { left: segSize - 5, top: segSize - 2 - eyeSize };
          } else if (d.x === -1) {
            e1 = { left: 2, top: 2 };
            e2 = { left: 2, top: segSize - 2 - eyeSize };
          } else if (d.y === -1) {
            e1 = { left: 2, top: 2 };
            e2 = { left: segSize - 2 - eyeSize, top: 2 };
          } else {
            e1 = { left: 2, top: segSize - 5 };
            e2 = { left: segSize - 2 - eyeSize, top: segSize - 5 };
          }
          return (
            <div
              key={i}
              className="absolute rounded-sm"
              style={{
                left: seg.x * cellSize,
                top: seg.y * cellSize,
                width: segSize,
                height: segSize,
                backgroundColor: '#46ecd5',
              }}
            >
              <div className="absolute rounded-full" style={{ width: eyeSize, height: eyeSize, backgroundColor: '#0f172b', ...e1 }} />
              <div className="absolute rounded-full" style={{ width: eyeSize, height: eyeSize, backgroundColor: '#0f172b', ...e2 }} />
            </div>
          );
        }
        return (
          <div
            key={i}
            className="absolute rounded-sm"
            style={{
              left: seg.x * cellSize,
              top: seg.y * cellSize,
              width: segSize,
              height: segSize,
              backgroundColor: '#00d5be',
              opacity: Math.max(0.3, 1 - i * 0.015),
            }}
          />
        );
      })}
      {/* Food */}
      {gameState === 'playing' && (
        <div
          className="absolute rounded-full"
          style={{
            left: food.x * cellSize + 2,
            top: food.y * cellSize + 2,
            width: cellSize - 4,
            height: cellSize - 4,
            backgroundColor: '#ffb86a',
            boxShadow: '0 0 8px rgba(255,184,106,0.6)',
          }}
        />
      )}

      {/* Overlay: idle */}
      {gameState === 'idle' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-ide-md">
          <button
            onClick={startGame}
            className="bg-primary text-primary-inv font-fira text-body-sm px-[12px] py-[10px] rounded-ide-md hover:brightness-110 transition-all"
          >
            start-game
          </button>
        </div>
      )}

      {/* Overlay: game over */}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] md:gap-[16px] bg-black/60 rounded-ide-md">
          <span className="text-heading text-body-sm md:text-body-lg font-bold">GAME OVER!</span>
          <span className="text-ide-teal-400 text-body-sm md:text-body-md">score: {score}</span>
          <button
            onClick={startGame}
            className="bg-primary text-primary-inv font-fira text-body-sm px-[12px] py-[10px] rounded-ide-md hover:brightness-110 transition-all"
          >
            play-again
          </button>
        </div>
      )}

      {/* Overlay: success */}
      {gameState === 'success' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] md:gap-[16px] bg-black/60 rounded-ide-md">
          <span className="text-ide-teal-300 text-body-sm md:text-body-lg font-bold">WELL DONE!</span>
          <span className="text-heading text-body-sm md:text-body-md">You collected all the food!</span>
          <button
            onClick={startGame}
            className="bg-primary text-primary-inv font-fira text-body-sm px-[12px] py-[10px] rounded-ide-md hover:brightness-110 transition-all"
          >
            play-again
          </button>
        </div>
      )}
    </div>
  );

  const arrowControls = (
    <div className="flex flex-col items-center gap-[4px]">
      <button
        onClick={() => handleArrow('up')}
        className="bg-ide-slate-800 hover:bg-ide-slate-600 active:bg-ide-slate-500 rounded-ide w-[48px] h-[36px] flex items-center justify-center text-theme-fg transition-colors cursor-pointer select-none"
      >
        <span className="text-[14px]">&#9650;</span>
      </button>
      <div className="flex gap-[4px]">
        <button
          onClick={() => handleArrow('left')}
          className="bg-ide-slate-800 hover:bg-ide-slate-600 active:bg-ide-slate-500 rounded-ide w-[48px] h-[36px] flex items-center justify-center text-theme-fg transition-colors cursor-pointer select-none"
        >
          <span className="text-[14px]">&#9664;</span>
        </button>
        <button
          onClick={() => handleArrow('down')}
          className="bg-ide-slate-800 hover:bg-ide-slate-600 active:bg-ide-slate-500 rounded-ide w-[48px] h-[36px] flex items-center justify-center text-theme-fg transition-colors cursor-pointer select-none"
        >
          <span className="text-[14px]">&#9660;</span>
        </button>
        <button
          onClick={() => handleArrow('right')}
          className="bg-ide-slate-800 hover:bg-ide-slate-600 active:bg-ide-slate-500 rounded-ide w-[48px] h-[36px] flex items-center justify-center text-theme-fg transition-colors cursor-pointer select-none"
        >
          <span className="text-[14px]">&#9654;</span>
        </button>
      </div>
    </div>
  );

  const foodCounter = (
    <div className="bg-ide-slate-800 rounded-ide-md p-[12px] md:p-[16px] flex flex-col gap-[8px]">
      <span className="text-body-sm text-theme-fg">{"// food left"}</span>
      <div className="flex flex-wrap gap-[6px] md:gap-[8px]">
        {foodEaten.map((eaten, i) => (
          <div
            key={i}
            className={`w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full transition-all ${
              eaten
                ? 'bg-ide-slate-600 opacity-30'
                : 'bg-ide-teal-400 shadow-[0_0_6px_rgba(0,213,190,0.4)]'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const scoreDisplay = (gameState === 'playing' || gameState === 'success') && (
    <span className="text-body-sm text-ide-teal-400 text-center">
      score: {score}
    </span>
  );

  return (
    <div
      className="backdrop-blur-[32px] border border-theme-stroke rounded-ide-md p-[16px] md:p-[32px] flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center md:items-start"
      style={{
        backgroundImage: 'linear-gradient(152deg, rgba(23,85,83,0.7) 2%, rgba(67,217,173,0.09) 82%)',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {gameBoard}

      {/* Side/bottom panel: arrows + food counter */}
      {isMobile ? (
        <div className="flex items-start gap-[16px] w-full">
          {arrowControls}
          <div className="flex flex-col gap-[8px] flex-1 min-w-0">
            {foodCounter}
            {scoreDisplay}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[24px] w-[180px] shrink-0">
          {arrowControls}
          {foodCounter}
          {scoreDisplay}
        </div>
      )}
    </div>
  );
}

export default SnakeGame;
