import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TodoItem from './TodoItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';


function ClassCard ({childToParent, course, title, upcoming, notificationsCount}){
    const cardSelected = () => {
        childToParent(course);
    }

    return(
        <Card className="card-container" sx={{ minWidth: 275 }}>
            <CardContent className="card-content">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {course}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Undergraduate
                </Typography>
                <Typography sx={{ textDecoration: 'underline' }} variant="body2">
                   Assignments Due
                </Typography>
                {Array.isArray(upcoming) && upcoming.map((item, index) => (
                    <TodoItem key={index} text={item} />
                ))}
      
            
            </CardContent>
            <CardActions>
                <Button size="small" onClick={cardSelected}>Go to Class Page</Button>
                <Badge badgeContent={notificationsCount} color="primary">
                    <NotificationsIcon sx={{ marginLeft: theme => theme.spacing(1) }} />
                </Badge>
            </CardActions>
        </Card>
    )
}

export default ClassCard;