import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Thead, Trow } from './transactions.styled';

export function TransactionHistory({ items }) {
   
 
    return (
        <Box as={"table"} p={1} mt={3} boxShadow = "shadow">
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <tbody>
                {items.map(({id, type, amount, currency}, index) => (  
                <Trow key={id} rowIndex={index}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </Trow>
                                    
                ))}
            </tbody>
        </Box>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }),
  ),
};

