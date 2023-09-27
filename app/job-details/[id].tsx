import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { useState, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import { Jobs } from "../../types";

const tabs = ["About", "Qualifications", "Responsibilities"];

export default function JobDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, reFetch } = useFetch<Jobs[]>("job-details", {
    job_id: params.id,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    reFetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data?.at(0)?.job_highlights?.Qualifications || []}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data?.at(0)?.job_highlights?.Responsibilities || []}
          />
        );

      case "About":
        return (
          <JobAbout info={data?.at(0)?.job_description ?? "No data provided"} />
        );
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : !data ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company item={data[0]} />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data?.at(0)?.job_google_link ??
            "https://careers.google.com/jobs/results"
          }
        />
      </>
    </SafeAreaView>
  );
}
