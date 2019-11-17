require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Whealy Motorcycle Repair`,
    description: `Motorcycle technician located in Toronto specializing in vintage, scooters.`,
    keywords: `alan whealy, motorcycle, scooter, vespa, repair, rebuild, restoration, toronto, vintage`,
    author: `@caitlinhaaf`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whealy-moto-repair`,
        short_name: `whealy`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ed1c24`,
        display: `minimal-ui`,
        icon: `src/images/whealyRepairLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: process.env.GATSBY_WHEALY_MAPS_API_KEY,
        address: `1224 Dupont Street, Toronto, ON, Canada`
      }
    },
  ],
}
