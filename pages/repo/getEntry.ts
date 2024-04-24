import { gql, GraphQLClient } from 'graphql-request'


const endpoint = `https://graphql.contentful.com/content/v1/spaces/28kurhd8jp23/environments/master`

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        //authorization: `Bearer MWwm8JaalvWxKoSYz6VP-u-Q5W-VZSEHOjMRMZ_vOnM`,
        authorization: `Bearer Bn7J4qltHjdpp5IE22ywp8Ls4_iqYslMVV2uD_oXikw`,
    },
})

const query = gql`
{
    postCollection(limit:1, preview: true,
      where: {slug: "coin-squareloop-to-offer-a-crypto-wallet"}
    ) {
      items  {
        __typename
        sys {
          id
        }
        postName
        slug
      }
    }
  }
   
`

interface Data {
    postCollection: {
        items: [
            {
                slug: string; postName: string; sys: {
                    id: string;
                    __typename: string;

                }
            }
        ]

    }

}

export default async function getEntry() {
    const data = await graphQLClient.request<Data>(query)
    console.log('data is: ', JSON.stringify(data, null, 2))
    return data.postCollection.items[0];
}
