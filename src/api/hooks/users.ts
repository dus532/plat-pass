import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

import { getUserFilterState } from '@/recoil/users';

export default function useUserQuery() {
  const [getUserFilter, setUserFilter] = useRecoilState(getUserFilterState);
  function useGetUsers() {
    return useQuery(query('platusers'));
  }

  function useGetUser() {
    return useQuery(
      query('platusers')
        .filterWhere('name', getUserFilter.name)
        .filterWhere('phoneNumber', getUserFilter.phoneNumber),
    );
  }

  function useSubmitGetUser() {
    const users = useGetUser();

    useEffect(() => {
      if (getUserFilter.name && users && !users.length) {
        toast.warn('일치하는 정보가 없습니다.');
      }
      if (users && users.length) {
        console.log('찾음', users);
      }
    }, [users]);

    return { fetch: setUserFilter };
  }

  return { useGetUsers, useGetUser, useSubmitGetUser };
}
