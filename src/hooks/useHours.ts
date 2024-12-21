"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback } from "react";
import useSWR from "swr";

export const useHours = () => {
    const session = useSession();

    const fetcher = (url: string) => axios.get(url).then((res) => res.data);

    const {
        data: hoursData,
        isLoading: isHoursDataLoading,
        error: hoursError,
    } = useSWR(session ? "/api/hours" : null, fetcher);

    return {
        hours: {
            hour: hoursData,
            isLoading: isHoursDataLoading,
            error: hoursError,
        },
    };
};