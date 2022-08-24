import { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      if (getUserFilter.name && users && !users.length) {
        console.log('못찾음', getUserFilter, users);
      }
      if (users && users.length) {
        console.log('찾음', users);
      }
      setLoading(false);
    }, [users]);

    return { fetch: setUserFilter, isLoading: loading };
  }

  return { useGetUsers, useGetUser, useSubmitGetUser };
}
