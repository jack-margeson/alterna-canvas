import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ClassCard ({childToParent, course}){
    const cardSelected = () => {
        childToParent(course);
    }

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {course}
                </Typography>
                <Typography variant="h5" component="div">
                    User Interface I
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Undergraduate
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum. List of upcoming <br></br>assignments or something.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={cardSelected}>Go to Class Page</Button>
            </CardActions>
        </Card>
    )
}

export default ClassCard;