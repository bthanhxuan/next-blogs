// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import API from '@/services/api';
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name?: string,
//   message?: string,
// }

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // console.log(req.headers.cookie)

  const method = req.method;
  if(method !== 'POST') {
    res.statusCode = 200
    res.json({
      status: 500,
      message: "Method not allowed."
    })
  }

  const data = req.body;
  // console.log("data api login", data);

  // try {
  //   const resServer = await API.call('/jwt-auth/v1/token', { data, method })

  //   const currentTime = new Date();
  //   const nextYear = new Date(currentTime.getFullYear() + 1, currentTime.getMonth());

  //   if (resServer.status === 200){
  //     res.statusCode = 302;
  //     res.setHeader('Location', '/');
  //     res.setHeader('Content-Type', "application/json");
  //     res.setHeader('Set-Cookie', `token=${resServer.token}; expires=${nextYear.toUTCString()}; Path=/`); 
  //     res.json(resServer);
  //   } else {
  //     res.statusCode = 302;
  //     res.setHeader('Location', '/login?error=LoginFailed');
  //     res.json(resServer);
  //   }
  // } catch (e:any) {
  //   res.statusCode = 200;
  //   res.json({
  //     status: 500,
  //     message: "Server Error.",
  //   })
  // }

  try {
    const resServer = await API.callJson('/jwt-auth/v1/token', data, 'POST');

    const currentTime = new Date();
    const nextYear = new Date(currentTime.getFullYear() + 1, currentTime.getMonth());
    // console.log('resServer', resServer);
    
    if(resServer.token) {
      res.statusCode = 200;
      // res.setHeader('Location', '/');
      res.setHeader('Content-Type', "application/json");
      res.setHeader('Set-Cookie', `token=${resServer.token}; expires=${nextYear.toUTCString()}; Path=/`); 
      res.json(resServer);
    } else {
      res.statusCode = 200;
      console.log(resServer);
      res.json(resServer);
    }
  } catch (e:any) {
    res.statusCode = 200;
    res.json({
      status: 500,
      message: "Server Error.",
    })
  }

}
