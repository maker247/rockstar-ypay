import { Stack } from "expo-router";

import {
    QueryClient,
    QueryClientProvider
} from "react-query"

export const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home"
                }}
            />

            <Stack.Screen
                name="scan"
                options={{ title: "Scan" }}
            />

            <Stack.Screen
                name="fxrate"
                options={{ title: "Exchange" }}
            />

            <Stack.Screen
                name="history"
                options={{ title: "History" }}
            />
        </Stack>
    </QueryClientProvider>
  );
}
