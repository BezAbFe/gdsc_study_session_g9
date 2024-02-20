document.addEventListener('DOMContentLoaded', function() {
    const operand1Input = document.getElementById('operand1');
    const operand2Input = document.getElementById('operand2');
    const resultParagraph = document.getElementById('result');
  
    function performOperation(operator) {
      const operand1 = parseFloat(operand1Input.value);
      const operand2 = parseFloat(operand2Input.value);
  
      if (isNaN(operand1) || isNaN(operand2)) {
        alert('Please enter valid numbers for both operands.');
        return;
      }
  
      let result;
      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          if (operand2 !== 0) {
            result = operand1 / operand2;
          } else {
            alert('Cannot divide by zero.');
            return;
          }
          break;
        default:
          alert('Invalid operator.');
          return;
      }
  
      resultParagraph.textContent = 'Result: ' + result;
    }
  
    // Attach performOperation function to the global scope for button onclick events
    window.performOperation = performOperation;
  });

