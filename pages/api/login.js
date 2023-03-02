import connect from '../../lib/mongodb';
import User from '../../model/schema';

connect();

export default async function handler(req, res, next) {
  const user = await User.findOne({ studentID, password });
  if (!user) {
    return res.json({ status: 'Not able to find the user' });
  } else {
    res.redirect('/dashboard/student');
  }
}
