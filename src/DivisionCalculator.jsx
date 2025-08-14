import React, { useState } from 'react';

const DivisionCalculator = () => {
  // State for inputs
  const [dividend1, setDividend1] = useState('');
  const [dividend2, setDividend2] = useState('');
  const [dividend3, setDividend3] = useState('');
  const [dividend4, setDividend4] = useState('');
  const [customDivisor, setCustomDivisor] = useState('');

  // State for results
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [result4, setResult4] = useState(null);

  // Calculate division with quotient and remainder
  const calculateDivision = (dividend, divisor) => {
    const dividendNum = parseFloat(dividend);
    const divisorNum = parseFloat(divisor);
    
    if (isNaN(dividendNum) || isNaN(divisorNum) || divisorNum === 0 || dividendNum <= 0 || divisorNum <= 0) {
      return { quotient: 'Invalid', remainder: 'Invalid' };
    }
    
    const quotient = Math.floor(dividendNum / divisorNum);
    const remainder = dividendNum % divisorNum;
    
    return { quotient, remainder };
  };

  // Handle calculations for each row
  const handleCalculate1 = () => {
    const result = calculateDivision(dividend1, 2);
    setResult1(result);
  };

  const handleCalculate2 = () => {
    const result = calculateDivision(dividend2, 5);
    setResult2(result);
  };

  const handleCalculate3 = () => {
    const result = calculateDivision(dividend3, 3);
    setResult3(result);
  };

  const handleCalculate4 = () => {
    const result = calculateDivision(dividend4, customDivisor);
    setResult4(result);
  };

  // Limit input length for custom division
  const handleDividend4Change = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      setDividend4(value);
    }
  };

  const handleCustomDivisorChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setCustomDivisor(value);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '100%' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '40px' }}>Camilla's Division Calculator</h1>
      
      {/* Row 1: ÷ 2 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="number"
            value={dividend1}
            onChange={(e) => setDividend1(e.target.value)}
            placeholder="Enter dividend"
            style={{
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: 'clamp(120px, 30vw, 200px)',
              minWidth: '120px'
            }}
          />
          <span style={{ fontSize: '18px' }}>÷ 2</span>
          <button
            onClick={handleCalculate1}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            =
          </button>
        </div>
        {result1 && (
          <div style={{ fontSize: '16px', textAlign: 'center' }}>
            <div style={{ marginBottom: '5px' }}>
              Quotient: <strong>{result1.quotient}</strong>
            </div>
            <div>
              Remainder: <strong>{result1.remainder}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Row 2: ÷ 5 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="number"
            value={dividend2}
            onChange={(e) => setDividend2(e.target.value)}
            placeholder="Enter dividend"
            style={{
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: 'clamp(120px, 30vw, 200px)',
              minWidth: '120px'
            }}
          />
          <span style={{ fontSize: '18px' }}>÷ 5</span>
          <button
            onClick={handleCalculate2}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            =
          </button>
        </div>
        {result2 && (
          <div style={{ fontSize: '16px', textAlign: 'center' }}>
            <div style={{ marginBottom: '5px' }}>
              Quotient: <strong>{result2.quotient}</strong>
            </div>
            <div>
              Remainder: <strong>{result2.remainder}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Row 3: ÷ 3 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="number"
            value={dividend3}
            onChange={(e) => setDividend3(e.target.value)}
            placeholder="Enter dividend"
            style={{
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: 'clamp(120px, 30vw, 200px)',
              minWidth: '120px'
            }}
          />
          <span style={{ fontSize: '18px' }}>÷ 3</span>
          <button
            onClick={handleCalculate3}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#ffc107',
              color: '#212529',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            =
          </button>
        </div>
        {result3 && (
          <div style={{ fontSize: '16px', textAlign: 'center' }}>
            <div style={{ marginBottom: '5px' }}>
              Quotient: <strong>{result3.quotient}</strong>
            </div>
            <div>
              Remainder: <strong>{result3.remainder}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Row 4: ÷ custom divisor */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="number"
            value={dividend4}
            onChange={handleDividend4Change}
            placeholder="Dividend"
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: 'clamp(80px, 20vw, 120px)',
              minWidth: '80px',
              textAlign: 'center'
            }}
          />
          <span style={{ fontSize: '18px' }}>÷</span>
          <input
            type="number"
            value={customDivisor}
            onChange={handleCustomDivisorChange}
            placeholder="Divisor"
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: 'clamp(60px, 15vw, 80px)',
              minWidth: '60px',
              textAlign: 'center'
            }}
          />
          <button
            onClick={handleCalculate4}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            =
          </button>
        </div>
        {result4 && (
          <div style={{ fontSize: '16px', textAlign: 'center' }}>
            <div style={{ marginBottom: '5px' }}>
              Quotient: <strong>{result4.quotient}</strong>
            </div>
            <div>
              Remainder: <strong>{result4.remainder}</strong>
            </div>
          </div>
        )}
      </div>
      
      {/* Important Notes */}
      <div style={{ 
        textAlign: 'left', 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        color: '#856404'
      }}>
        <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', fontSize: '18px' }}>⚠️ Important Notes:</p>
        <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>• Only whole numbers (1, 2, 3, ...) are allowed</p>
        <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>• Division by zero is not allowed</p>
        <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>• Click the "=" button to calculate and see results</p>
      </div>
    </div>
  );
};

export default DivisionCalculator;
