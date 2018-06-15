import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button"
import "./Card.css";
import PropTypes from "prop-types";

const styles = {
	card: {
		maxWidth: 420,
		margin: 10,
		backgroundColor: "#149f98ba",
		
	},


	media: {
		height: 0,
		paddingTop: '56.25%', 
	},
};
const Cards = ({ image, title, subheader, description, url }) => (
	<Card style={styles.card}>
		<CardHeader
			title={title}
			subheader={subheader}
		/>
		<CardMedia
			style={styles.media}
			image={image}
		/>
		<CardContent>
			<Typography component="p" >
				{description}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" ><a href={url}>More...</a></Button>

		</CardActions>
	</Card>
);
Cards.propTypes = {
	title: PropTypes.string.isRequired,
	subheader: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,

}

export default Cards;