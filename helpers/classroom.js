const classroom = require('@googleapis/classroom')

const oauth2Client = new classroom.auth.OAuth2(
  process.env['CLIENT_ID'],
  process.env['CLIENT_SECRET'],
  process.env['REDIRECT_URL'],
);
oauth2Client.setCredentials({
  refresh_token: process.env['ACCESS_TOKEN'],
  access_token: process.env['REFRESH_TOKEN'],
})
const client = classroom.classroom({
  version: 'v1',
  auth: oauth2Client
})

export default async function announceInClassroom(message) {
  try {
    await client.courses.announcements.create({
      courseId: process.env['COURSE_ID'],
      requestBody: {
        "courseId": process.env['COURSE_ID'],
        "creatorUserId": process.env['USER_ID'],
        "state": "PUBLISHED",
        "text": message,
      },
    })
  } catch(err) { console.error(err) }
}