import image from "./logo192.png";
import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Card, UserPhoto, Stats, StatsItem, Title, Info } from "./profile.styled";



export default function Profile({username, tag, location, avatar=image, stats}) {
    return (
        <Box bg="background" width="250px" p={4} boxShadow="shadow" mb={5}>
            <Card>
                <UserPhoto
                    src={avatar}
                    alt="UserPhoto"
                />
                <Title>{username}</Title>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </Card>

            <Stats>
                <StatsItem>
                    <span>Followers</span>
                    <span style={{fontWeight: "bold"}}>{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span>Views</span>
                    <span style={{fontWeight: "bold"}}>{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span >Likes</span>
                    <span style={{fontWeight: "bold"}}>{stats.likes}</span>
                </StatsItem>
            </Stats>
        </Box>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }) 
};