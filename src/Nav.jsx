import { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Input,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const MonthlyExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddExpense = () => {
    const newExpense = { category, amount };
    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount(0);
  };

  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + parseInt(curr.amount),
    0
  );

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Monthly Expenses
      </Heading>

      <Flex justify="space-between" mb={4}>
        <Stat>
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>{totalExpenses} THB</StatNumber>
        </Stat>

        {/* <Button colorScheme="blue">Export Report</Button> */}
      </Flex>

      <Stack direction="row" spacing={4} mb={4}>
        <Input
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Input
          type="number"
          min="0"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button colorScheme="green" onClick={handleAddExpense}>
          Add 
        </Button>
      </Stack>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {expenses.map((expense, index) => (
          <GridItem
            key={index}
            colSpan={1}
            p={4}
            boxShadow="md"
            borderRadius="md"
            bg="gray.100"
          >
            <Stat>
              <StatLabel>{expense.category}</StatLabel>
              <StatNumber>{expense.amount} THB</StatNumber>
            </Stat>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MonthlyExpenses;
