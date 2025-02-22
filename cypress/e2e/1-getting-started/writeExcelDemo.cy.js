describe('Write test results to Excel', () => {
    it('should log test results to Excel file', () => {
      const testResults = [
        { testName: 'Login Test 1', status: 'Passed' },
        { testName: 'Login Test 2', status: 'Failed' },
        { testName: 'Signup Test', status: 'Passed' }
      ];
  
      cy.writeToExcel(testResults, 'testResultDemo.xlsx');
    });
  });