import * as React from 'react';
import { gql, useQuery, DocumentNode } from '@apollo/client';
import MovableList from '../components/MovableList';
interface IProps {
}

const UsersList: React.FC<IProps> = () => {
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

	type user = {
		firstName: string;
		surname: string;
		age: number;
		hobby: {
			id: number;
			sport: string;
		};
	};

	const { loading, error, data } = useQuery(getAllUsers, {
		notifyOnNetworkStatusChange: true
	});

	if (error) return <>{error.message}</>
	if (loading) return <>{'loading ...'}</>

	const users = data.allUsers.map((result: user) => `${result.firstName} ${result.surname}, age: ${result.age}`)

	return (
		<>
			{
				users.length &&
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
			}
		</>
	);
}

export default UsersList;