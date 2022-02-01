import * as React from 'react';
import { gql, useQuery, DocumentNode } from '@apollo/client';
import MovableList from '../components/MovableList';

interface IProps {
}

const UsersList: React.FC<IProps> = () => {
	const [isError, setError] = React.useState('')
	const [isLoading, setLoading] = React.useState(false)
	const [users, setUsers] = React.useState([])

	const getAllUsers: DocumentNode = gql`
    query {
      allUsers {
        firstName
        surname
        age
        hobby {
          id
          sport
        }
      }
    }
  `

	const { loading, error, data } = useQuery(getAllUsers, {
		onCompleted: () => {
			type user = {
				firstName: string;
				surname: string;
				age: number;
				hobby: {
					id: number;
					sport: string;
				};
			};

			if (loading) setLoading(true);
			if (error) setError(error.message)

			setUsers(data.allUsers.map((result: user) => `${result.firstName} ${result.surname}, age: ${result.age}`));
			setLoading(false);
			setError('');
		},
	});

	return (
		<>
			{
				isError ?
					error :
					!isLoading && users.length ?
						<MovableList
							listItems={users}
							ulStyle={{
								listStyleType: 'none',
								padding: 0,
								margin: 0
							}}
							textStyle={{
								color: 'lightgreen',
								fontSize: '1.2em'
							}}
						/>
						:
						'loading...'
			}
		</>
	);
}

export default UsersList;