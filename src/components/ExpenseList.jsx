import { Section } from "../pages/Home";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ExpenseItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  span {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

export default function ExpenseList({ expenses }) {
  const navigate = useNavigate();

  return (
    <Section>
      <ExpenseItemList>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => {
              navigate(`/detail/${expense.id}`);
            }}
          >
            <ExpenseDetails>
              <span>{expense.date}</span>
              <span>{`${expense.item} - ${expense.description}`}</span>
            </ExpenseDetails>
            <span>{expense.amount.toLocaleString()} 원</span>
          </ExpenseItem>
        ))}
      </ExpenseItemList>
    </Section>
  );
}
