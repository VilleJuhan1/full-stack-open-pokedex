/* eslint-env node */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

// By default use the production build from 'dist' folder
app.use(express.static('dist'))

// Define a version endpoint to identify the deployed version and verify new deployments
app.get('/version', (req, res) => {
  res.send('11.12. Health check failure test') // change this string to ensure a new version deployed
})

// Define a health check endpoint, which on render.com is by default /healthz
//app.get('/healthz', (req, res) => {
//  res.status(200).send('ok')
//})

// Test for error monitoring, ie. if deployments fails correctly
app.get('/healthz', (req, res) => {
  res.status(500).send('simulated failure for testing error monitoring')
})

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`server started on port ${PORT}`)
})
