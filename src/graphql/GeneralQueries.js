import gql from 'graphql-tag';

export const PING_QUERY = gql`
  query pingQuery {
    ping
  }
`;

export const USER_QUERY = gql`
    query userQuery {
        me {
            id
            email
            name
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation login($email: String, $password: String, $fbToken: String) {
        login(email: $email, password: $password, fbToken: $fbToken) {
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
    me {
      id
      events(association: [OWNER, JOINED], status: [SET, COMPLETED, LIT]) {
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

export const NEWS_FEED_QUERY = gql`
  query newsFeed {
    newsFeed {
      id
      title
      description
      status
      owner {
        id
        name
      }
      invited {
        id
      }
      joined {
        id
      }
    }
  }
`;

export const USER_PROFILE_DETAILS_QUERY = gql`
  query ($id: ID!) {
    user (id: $id) {
      id
      name
      email
      bio
      score
    }
  }
`;

export const COMPLETED_EVENTS_COUNT = gql`
  query ($userId: ID) {
    completedEventsCount(userId: $userId)
  }
`;

export const FRIENDS_COUNT = gql`
  query ($userId: ID) {
    friendsCount(userId: $userId)
  }
`;

export const PROFILE_DETAILS_MUTATION = gql`
  mutation ($name: String, $bio: String) {
    updateProfileDetails(name: $name, bio: $bio) {
      id
      name
      bio
    }
  }
`;
