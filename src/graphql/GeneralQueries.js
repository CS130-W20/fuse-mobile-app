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

export const EVENT = gql`
  query ($eventId: ID!) {
    event(eventId: $eventId) {
      id
      title
      description
      deadline
      scheduledFor
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
      score
      createdAt
      updatedAt
      completedAt
    }
  }
`;

export const CREATE_EVENT_MUTATION = gql`
    mutation createEvent($title: String!, $description: String!, $invitees: [ID!]!) {
        createEvent(title: $title, description: $description, invitees: $invitees ) {
            id
        }
    }
`;

export const JOIN_EVENT = gql`
  mutation ($eventId: ID!) {
    joinEvent(eventId: $eventId) {
      id
    }
  }
`;

export const LEAVE_EVENT = gql`
  mutation ($eventId: ID!) {
    leaveEvent(eventId: $eventId) {
      id
    }
  }
`;

export const UPDATE_EVENT_STATUS = gql`
  mutation ($eventId: ID!, $currentStatus: EventStatus!, $newStatus: EventStatus!) {
    updateEventStatus (
      eventId: $eventId,
      currentEventStatus: $currentStatus,
      newEventStatus: $newStatus,
    ) {
      status
    }
  }
`;

export const UPDATE_EVENT_SCHEDULEDFOR = gql`
  mutation ($eventId: ID!, $scheduledFor: DateTime!) {
    updateEventScheduledFor(
      eventId: $eventId,
      scheduledFor: $scheduledFor,
    ) {
      id
      scheduledFor
    }
  }
`;

export const COMPLETE_EVENT = gql`
  mutation ($eventId: ID!) {
    completeEvent(eventId: $eventId) {
      id
      score
    }
  }
`;

export const UNDO_COMPLETE_EVENT = gql`
  mutation ($eventId: ID!) {
    undoCompleteEvent(eventId: $eventId) {
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

export const FRIEND_PROFILE_EVENTS = gql`
  query friendProfileEvents ($friendUserId: ID!) {
    friendProfileEvents(friendUserId: $friendUserId) {
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

export const FRIEND_SEARCH = gql`
  query ($prefix: String!){
    users (prefix: $prefix){
      name
      id
    }
  }
`;

export const GET_FRIEND_STATUS = gql`
  query ($friendUserId: ID!) {
    friendshipStatus(friendUserId: $friendUserId)
  }
`;

export const REQUEST_FRIEND = gql`
  mutation ($userId: ID!) {
    requestFriend(userId: $userId)
  }
`;

export const CONFIRM_FRIEND = gql`
  mutation ($userId: ID!) {
    confirmFriend(userId: $userId)
  }
`;

export const REMOVE_FRIEND = gql`
  mutation ($userId: ID!) {
    removeFriend(userId: $userId)
  }
`;

export const GET_SELF_FRIENDS = gql`
  query {
    me {
      id
      friends {
        friend {
          id
          name
        }
      }
    }
  }
`;

export const GET_FRIENDS = gql`
  query ($userId: ID!) {
    user(id: $userId) {
      id
      friends {
        friend {
          id
          name
        }
      }
    }
  }
`;
