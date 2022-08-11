import { LogError, LogSuccess } from './src/utils/Logger'
import dotenv from 'dotenv'
import app from './src/server/index'

// Config dotenv file

dotenv.config()

const port = process.env.PORT || 8000

// Execute SERVER

app.listen(port, () => {
    LogSuccess(`[SERVER ON]: SERVIDOR CORRIENDO EN http://localhost:${port}/api`)
})

// Control SERVER ERROR

app.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`)
})