import gql from 'graphql-tag';

export const PING_QUERY = gql`
  query pingQuery {
    ping
  }
`;

export const USER_QUERY = gql`
    query userQuery {
        user {
            id
            email
            name
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                name
            }
        }
    }
`;

export const SIGNUP_MUTATION = gql`
    mutation signup($email: String!, $password: String!, $name: String!) {
        signup(email: $email, password: $password, name: $name) {
            token
            user {
                id
                email
                name
            }
        }
    }
`;

export const CREATE_EVENT_MUTATION = gql`
    mutation createEvent($title: String!) {
        createEvent(title: $title) {
            id
        }
    }
`;

export const USER_EVENTS_QUERY = gql`
  query userQuery {
    user {
      id
      events(association: [], status: [SET, COMPLETED, LIT]) {
        id
        title
        description
        owner {
          id
          name
        }
        status
        invited {
          id
          name
        }
        joined {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`;
