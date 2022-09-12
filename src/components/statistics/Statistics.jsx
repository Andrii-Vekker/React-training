import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { StatsTitle, InfoBox, Info } from "../statistics/statistics.styled";
import getRandomHexColor from "components/randomColors";

export default function Statistics({stats, title}) {
       return (
        <Box bg="background" width="250px" p={4} mt={3}>
               {title && <StatsTitle>{title}</StatsTitle>} 
            <InfoBox>
                {stats.map(({id, label, percentage}) => ( 
                    <Info  style={{background: getRandomHexColor()}} key={id}>
                        <span>{label}</span>
                        <span>{percentage}</span>
                    </Info>
                ))}
            </InfoBox>
        </Box>
    
    );
};

Statistics.propTypes = {
    // id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // percentage: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }),
  ),
};