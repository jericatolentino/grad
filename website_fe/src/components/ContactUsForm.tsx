import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, InputLabel, Button, Box } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components'

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string().required()
}).required();

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const ContactUsForm: React.VFC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => console.log(data);

    const handleError = () => {
        const createErrorMessage = (field: string) => `${field} is required.`
        if (errors.firstName) return createErrorMessage('First Name')
        if (errors.lastName) return createErrorMessage('Last Name')
        if (errors.email) return errors.email.message
        if (errors.description) return createErrorMessage('Description')
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Box
                sx={{ 
                    display: 'flex',
                    marginTop: '1rem'
                }}
            >
                <InputLabel style={{ marginRight: '1rem' }} htmlFor={'firstName'}>
                    First Name
                </InputLabel>
                <Controller
                    name='firstName'
                    control={control}
                    render={({ field }) => <Input
                        id={'firstName'}
                        {...field}
                    />}
                />
            </Box>

            <Box
                sx={{ 
                    display: 'flex',
                    marginTop: '1rem'
                }}
            >
                <InputLabel style={{ marginRight: '1rem' }} htmlFor={'lastName'}>
                    Last Name
                </InputLabel>
                <Controller
                    name='lastName'
                    control={control}
                    render={({ field }) => <Input
                        id={'lastName'}
                        {...field}
                    />}
                />
            </Box>


            <Box
                sx={{ 
                    display: 'flex',
                    marginTop: '1rem'
                }}
            >
                <InputLabel style={{ marginRight: '1rem' }} htmlFor={'email'}>
                    Email
                </InputLabel>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => <Input
                        id={'email'}
                        {...field}
                    />}
                />
            </Box>

            <Box
                sx={{ 
                    display: 'flex',
                    marginTop: '1rem'
                }}
            >
                <InputLabel style={{ marginRight: '1rem' }} htmlFor={'description'}>
                    Description
                </InputLabel>
                <Controller
                    name='description'
                    control={control}
                    render={({ field }) => <Input
                        id={'description'}
                        {...field}
                    />}
                />
            </Box>

            <p style={{ color: 'white', fontSize: '1rem' }}>{handleError()}</p>

            <Button
                name='submit'
                variant='contained'
                type={'submit'}
            >
                Submit
            </Button>

        </Form>
    );
}
// Controller to expose input refs (from external library components)

export default ContactUsForm

/*
TODO:

change to use grid instead of box,
change font color,
integrate emailjs

*/