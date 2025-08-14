# Execution Context in JavaScript

## 1. Definition
Execution Context is the environment in which JavaScript code is evaluated and executed.  
It determines **which variables** and **functions** are accessible, and how the code will run.

There are three main types:
1. **Global Execution Context (GEC)** – Created when your JS file first runs.
2. **Function Execution Context (FEC)** – Created whenever a function is called.
3. **Eval Execution Context** – Created when using `eval()` (rarely used, not recommended).

---

## 2. Creation Phases
An execution context has two phases:
1. **Creation Phase**
   - Memory is allocated for variables and functions.
   - Variables are hoisted (set to `undefined` initially).
   - Functions are stored entirely in memory.
2. **Execution Phase**
   - Code runs line-by-line and variables get their actual values.

---

## 3. Example Flow
1. JS engine creates Global Execution Context.
2. Allocates memory for variables (`var`, `let`, `const`) and functions.
3. Executes code line-by-line.
4. When a function is called, a new Function Execution Context is created.

---

## 4. Key Points
- Each function call creates a new execution context.
- Execution contexts are stacked in the **Call Stack**.
- When a function finishes, its context is removed from the stack.

