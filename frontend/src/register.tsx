
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Controller } from "react-hook-form";

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
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
            >
                <FormControl
                    required
                    error={errors?.hasOwnProperty("title")}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel component="legend">テキスト質問</FormLabel>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: "入力してください" }}
                        render={({ field }) => <TextField {...field} variant="outlined" />}
                    />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    送信
                </Button>
            </form>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register('title')} />
                <input {...register('description')} />
                <input {...register('owner_id', { required: true })} />
                {errors.description && (
                    <span style={{ color: 'red' }}>This field is required</span>
                )}
                <Button type="submit">登録</Button>
            </form>
        </>
    );
};

export default Register;