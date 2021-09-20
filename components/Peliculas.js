import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Peliculas = ({ pelicula }) => {
    const { title, director, planetConnection } = pelicula;

    return (
        <div>
            <Box sx={{ minWidth: 275, my: 1 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Director: {director}
                            </Typography>
                            {
                                planetConnection?.planets.map((planet) => (
                                    <Chip key={name} label={planet.name} />
                                ))
                            }
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>




        </div>
    )
}

export default Peliculas
