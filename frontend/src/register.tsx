import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Controller } from "react-hook-form";
import {
    TextField,
    Select,
    MenuItem,
    Grid,
} from '@material-ui/core'


type Inputs = {
    title: string;
    description: string;
    owner_id: string;
};


const Register = () => {

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        fetch(`http://localhost:8080/users/${data.owner_id}/items/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )
        console.log(data)
        console.log(data.owner_id)
    };

    return (
        <>
            新規に追加したい項目を入力してください。
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
            >
                {/* <FormControl
                    sx={{ m: 1, minWidth: 120 }} size="small"
                    required
                    error={errors?.hasOwnProperty("title")}
                    component="fieldset"
                // fullWidth
                >
                    <FormLabel component="legend">項目名</FormLabel> */}
                <Grid item xs={6}>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: "入力してください" }}
                        render={({ field }) => <TextField {...field} variant="outlined" />}
                    />
                </Grid>
                {/* </FormControl> */}

                {/* <FormControl
                    sx={{ m: 1, minWidth: 120 }} size="small"
                    required
                    error={errors?.hasOwnProperty("description")}
                    component="fieldset"
                >
                    <FormLabel component="legend">説明</FormLabel> */}
                <Grid item xs={6}>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: "入力してください" }}
                        render={({ field }) => <TextField {...field} variant="outlined" />}
                    />
                </Grid>
                {/* </FormControl> */}
                {/* 
                <FormControl
                    sx={{ m: 1, minWidth: 120 }} size="small"
                    required
                    error={errors?.hasOwnProperty("owner_id")}
                    component="fieldset"
                >
                    <FormLabel component="legend">所有者ID</FormLabel> */}
                <Grid item xs={6}><Controller
                    name="owner_id"
                    control={control}
                    rules={{ required: "入力してください" }}
                    render={({ field }) =>
                        <Select {...field}>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    }
                />
                </Grid>
                {/* </FormControl> */}
                <Button type="submit" variant="contained" color="primary">
                    送信
                </Button>
            </form>
        </>
    );
};

export default Register;