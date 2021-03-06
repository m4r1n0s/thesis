export const LOGIN_QUERY = `
  query Login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`;

export const ME_QUERY = `
{
	me {
    _id
    email
    firstName
    lastName
    date
    role
  }
}
`;

export const ME_ACTIONS_QUERY = `
query meActions($authorId: ID!){
  meActions(authorId: $authorId) {
    _id,
    date,
    title,
    description
    approved
    author {
      _id
      firstName
    }
  }
}
`;

export const LOAD_ACTIONS_QUERY = `
query actions($authorId: ID){
  actions(authorId: $authorId) {
   
      _id,
      date,
      title,
      description
      approved,
      latitude,
      longitude,
      start_date,
      end_date,
      votes,
      status,
      author {
        _id,
        firstName
     
    }
  }
}
`;

export const LOAD_ACTION_QUERY = `

  query action($id: ID!){
    action(_id: $id){
      _id,
      date,
      title,
      description
      approved,
      latitude,
      longitude,
      start_date,
      end_date,
      votes,
      status,
      author {
        _id,
        firstName
      }
    }
  }

`;
