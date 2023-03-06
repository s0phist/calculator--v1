import { Button, Grid, styled } from '@mui/material';

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: '#004d40',
  borderColor: props.selected ? '#fafafa' : '#004d40',
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton fullWidth variant="outlined" onClick={() => selectOperation(operation)} selected={selectedOperation === operation}>
        {operation}
      </StyledButton>
    </Grid>
  );
};
