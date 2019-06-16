import { gql } from 'apollo-boost';

export const EMPLOYERS = gql`
  query getEmployers($fairId: String, $isUser: Boolean) {
    getEmployerList(fairId: $fairId, isUser: $isUser) {
      degree_requirements,
      hiring_majors,
      hiring_types,
      tables,
      visa_support,
      employer {
        id
        name
        company_url
      }
    }
  }
`;
