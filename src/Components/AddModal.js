import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const AddModal = ({ status, toggle, addUser, user }) => {
    let defaultValues;

    const getValues = () => {

        if (Object.keys(user).length !== 0) {
            defaultValues = {name: user["Name"], username: user["Username"], email: user["Email Address"], userGroup: user["Group"], profile: user["Profile"]};
            console.log(defaultValues)
        } else {
            defaultValues = {
                name: '',
                username: '',
                email: '',
                userGroup: '',
                profile: ''
            };
        }

        return defaultValues;
    }

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm(getValues());

    const onSubmit = (data) => {
        const newUserData = { "Name": data.name, "Username": data.username, "Email Address": data.email, "Group": data.userGroup, "Profile": data.profile }
        addUser(newUserData);
        toggle(); // Close form
        handleClear();
    };

    const hideLabel = (id) => {
        const label = document.getElementById(id);
        if (label) {
            label.style.display = 'none';
        } else {
            console.log(`Element with id '${id}' does not exist.`);
        }
    };

    const handleClear = () => {
        reset({
            name: '',
            username: '',
            email: '',
            userGroup: '',
            profile: ''
        });
    };

    return (
        <>
            <Modal open={status} onClose={toggle} aria-labelledby="addModalTitle">
                <Box className="modal">
                    <Typography id="addModalTitle" variant="h6">
                        Add a new user
                    </Typography>

                    <Grid container spacing={2} sx={{ padding: '10px 25px 25px 25px' }}>
                        <Grid item xs={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl sx={{ mt: '14px' }} fullWidth>
                                    Full Name
                                    <TextField
                                        defaultValue={defaultValues.name}
                                        placeholder="Enter full name"
                                        {...register('name', { required: true })}
                                        error={!!errors.name}
                                        helperText={errors.name && 'Name is required'}
                                    />
                                </FormControl>

                                <FormControl sx={{ mt: '14px' }} fullWidth>
                                    Username
                                    <TextField
                                        required
                                        defaultValue={defaultValues.username}
                                        placeholder="Enter username"
                                        {...register('username', { required: true })}
                                        error={!!errors.username}
                                        helperText={errors.username && 'Username is required'}
                                    />
                                </FormControl>

                                <FormControl sx={{ mt: '14px' }} fullWidth>
                                    Email Address
                                    <TextField
                                        required
                                        defaultValue={defaultValues.email}
                                        placeholder="Enter user email address"
                                        {...register('email', { required: true })}
                                        error={!!errors.email}
                                        helperText={errors.email && 'Email is required'}
                                    />
                                </FormControl>

                                <FormControl sx={{ mt: '14px' }} fullWidth>
                                    User Group
                                    <FormControl fullWidth>
                                        {!user?.['Group'] && <InputLabel id="group-select-label">Choose user group</InputLabel>}
                                        <Controller
                                            control={control}
                                            name="userGroup"
                                            defaultValue={defaultValues.userGroup}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select
                                                    required
                                                    {...field}
                                                    id="groupSelect"
                                                    onFocus={() => hideLabel('group-select-label')}
                                                    error={!!errors.userGroup}
                                                    displayEmpty
                                                >
                                                    <MenuItem value="" disabled>
                                                        Choose user group
                                                    </MenuItem>
                                                    <MenuItem value="Office">Office</MenuItem>
                                                    <MenuItem value="Managers">Managers</MenuItem>
                                                    <MenuItem value="Head Office">Head Office</MenuItem>
                                                </Select>
                                            )}
                                        />
                                        {errors.userGroup && (
                                            <Typography variant="caption" color="error">
                                                User group is required
                                            </Typography>
                                        )}
                                    </FormControl>
                                </FormControl>

                                <FormControl sx={{ mt: '10px' }} fullWidth>
                                    User Profile
                                    <FormControl fullWidth>
                                        {!user?.['Profile'] && <InputLabel id="profile-select-label">Choose profile</InputLabel>}
                                        <Controller
                                            control={control}
                                            name="profile"
                                            defaultValue={defaultValues.profile}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select
                                                    required
                                                    {...field}
                                                    id="profileSelect"
                                                    onFocus={() => hideLabel('profile-select-label')}
                                                    error={!!errors.profile}
                                                    displayEmpty
                                                >
                                                    <MenuItem value="" disabled>
                                                        Choose profile
                                                    </MenuItem>
                                                    <MenuItem value="Active">Active</MenuItem>
                                                    <MenuItem value="Inactive">Inactive</MenuItem>
                                                    <MenuItem value="Locked">Locked</MenuItem>
                                                </Select>
                                            )}
                                        />
                                        {errors.profile && (
                                            <Typography variant="caption" color="error">
                                                Profile is required
                                            </Typography>
                                        )}
                                    </FormControl>
                                </FormControl>

                                <hr style={{ margin: '30px 0' }} />

                                <Grid container sx={{ mt: '25px' }}>
                                    <Grid item xs={12}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item xs={4}>
                                                <Button type="button" onClick={handleClear} variant="text" color="primary">
                                                    Reset Fields
                                                </Button>
                                            </Grid>
                                            <Grid item xs={8} container justifyContent="flex-end">
                                                <Button onClick={toggle} variant="outlined" color="primary">
                                                    Cancel
                                                </Button>
                                                <Button type="submit" sx={{ ml: '20px' }} variant="contained" color="success">
                                                    Add User
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default AddModal;
