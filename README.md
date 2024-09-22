#modal-packages
Voici un exemple de `README.md` pour votre projet GitHub :

# Modal Component for React

## Description

A customizable modal component for React applications.

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)

## Installation

You can install the package via npm:

```bash
npm i @syfrost/modal-pkg
```

## Usage

Here is a basic example of how to use the modal component:

```typescript
import React, { useState } from 'react'
import ModalComponent from '@syfrost/modal-pkg'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {isOpen && <ModalComponent content="Example text" onClose={handleClose} />}
    </div>
  )
}

export default App
```

## Props

| Prop     | Type     | Required | Description                        |
|----------|----------|----------|------------------------------------|
| content  | `string` | Yes      | The content to display in the modal|
| onClose  | `() => void` | No   | Function to call when the modal is closed |

## Development

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Syfrost/modal-package.git
    ```
2. Navigate to the project directory:
    ```bash
    cd modal-package
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm start
    ```

## Testing

To run the tests, use the following command:

```bash
npm test
```