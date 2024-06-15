import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Grid, Avatar, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 12,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        maxWidth: 600,
        minWidth: 300,
    },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
}));

const PokemonDetailModal = ({ open, handleClose, selectedPokemon }) => {
    return (
        <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h5">Pokémon Details</Typography>
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon fontSize="large" color="error" />
                    </IconButton>
                </Grid>
            </DialogTitle>
            <DialogContent dividers>
                {selectedPokemon && (
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={4} textAlign="center">
                            <StyledAvatar
                                alt={selectedPokemon.name}
                                src={selectedPokemon.sprites.front_default}
                                style={{ height: '250px' }}
                            />
                            <Typography variant="h6" mt={2}>{selectedPokemon.name.toUpperCase()}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Height:</strong> {(selectedPokemon.height / 10).toFixed(1)} m</Typography>
                                    <Typography variant="body1"><strong>Weight:</strong> {(selectedPokemon.weight / 10).toFixed(1)} kg</Typography>
                                    <Typography variant="body1"><strong>Base Experience:</strong> {selectedPokemon.base_experience}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Abilities:</strong></Typography>
                                    {selectedPokemon.abilities.map((ability, index) => (
                                        <Chip key={index} label={ability.ability.name} variant="outlined" size="small" sx={{ margin: '4px 4px 0 0' }} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </StyledDialog>
    );
};

export default PokemonDetailModal;
