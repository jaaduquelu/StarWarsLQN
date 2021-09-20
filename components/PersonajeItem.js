import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import Peliculas from './Peliculas';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const PersonajeItem = ({ personaje }) => {

    const { name, gender, birthYear, homeworld, filmConnection } = personaje;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {homeworld.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {birthYear}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleOpen}>Saber más</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        El personaje {name} nació en el año {birthYear} en el planeta {homeworld.name}
                    </Typography>
                    <Typography id="modal-modal-footer" sx={{ mt: 2 }}>
                        Peliculas:<br /><br />
                        {
                            filmConnection?.films.map((film) => (
                                <Peliculas
                                    key={film.id}
                                    pelicula={film}
                                />
                            ))
                        }
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default PersonajeItem;
