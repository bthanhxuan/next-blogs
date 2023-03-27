import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalState } from "@/state";

function useAuthentication() {
  const router = useRouter();
  const [token] = useGlobalState('token');

  useEffect(()=>{
    if(token) {
      router.push('/');
    }
  },[token])
}

export {
  useAuthentication
}

