import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.JWT_SECRET || 'your-super-secret-jwt-key'
const encodedKey = new TextEncoder().encode(secretKey)

export async function signJwt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function verifyJwt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    return null
  }
}
