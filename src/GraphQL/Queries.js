import {gql} from "@apollo/client"

export const GET_TEST_DATA = gql`
query Query {
  countries {
    name
    code
    capital
    native
    continent {
      name
    }
    currency
    emoji
    languages {
      code
      name
      native
    }
  }
}

`

export const GET_FILTERED_DATA = gql`
query Query($code: ID!) {
  country(code: $code) {
    name
    code
    continent {
      name
    }
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`

