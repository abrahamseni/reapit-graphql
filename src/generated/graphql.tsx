import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://graphql.reapit.cloud/graphql", {
    method: "POST",
    ...({"headers":{"headers":{"authorization":"eyJraWQiOiJocW5JOFljYlwvZmwyditPQkd4QWJNdEhYaTgwejJlMUJudkl0ZlFGUzVNQT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoidVQ2bnVLZXlSb0NSdVVtVUFTQ015QSIsInN1YiI6ImZkNDM0NWMzLTMxOTMtNDhiZC1hODllLWQwYjI1YmY5MTRhNCIsImNvZ25pdG86Z3JvdXBzIjpbIkZvdW5kYXRpb25zRGV2ZWxvcGVyQWRtaW4iLCJGb3VuZGF0aW9uc0RldmVsb3BlciJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOnJlYXBpdDpkZXZlbG9wZXJJZCI6ImM2ZTBhMDc4LWQ1MGUtNDMwZS1iNjQ5LTI0MTJmYmE3ZDI2YSIsImN1c3RvbTpyZWFwaXQ6b3JnUHJvZHVjdCI6ImFnZW5jeUNsb3VkIiwiY3VzdG9tOnJlYXBpdDpvZmZpY2VJZCI6Ik1LVCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX2VRN2RyZU56SiIsImNvZ25pdG86dXNlcm5hbWUiOiJmZDQzNDVjMy0zMTkzLTQ4YmQtYTg5ZS1kMGIyNWJmOTE0YTQiLCJjdXN0b206cmVhcGl0Om9yZ05hbWUiOiJTb2Z0d2FyZVNlbmkiLCJvcmlnaW5fanRpIjoiN2I5ZDdkODAtMzNhYS00OTMxLWJmNGItYzU2YzQ0OTQ2NGMwIiwiYXVkIjoiOG9haTdpbzY1OGZlNDltdXI4ZWZsbjY4aCIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnJlYXBpdDpvcmdJZCI6ImYyYTgzNDk1LTZkYjUtNGYxMy1iOTU3LWVmMTE5YTg0ZDJiNCIsImF1dGhfdGltZSI6MTY0MDU4NjEzMSwiY3VzdG9tOnJlYXBpdDpjbGllbnRDb2RlIjoiU0JPWCIsIm5hbWUiOiJBYnJhaGFtIEFuYWsgQWd1bmciLCJjdXN0b206cmVhcGl0OnVzZXJDb2RlIjoiQURWIiwiZXhwIjoxNjQwNjA0MjMyLCJpYXQiOjE2NDA2MDA2MzIsImp0aSI6ImUxNzA1OTBlLTRiODUtNGExZC1hMGM0LWY2NWI1OWE0YTNiOSIsImVtYWlsIjoiYWJyYWhhbUBzb2Z0d2FyZXNlbmkuY29tIn0.DRHdXaTpxteGDkOvodw9T1RiNF0SPAA6JNTme8z4pUz6N-juKW5bt6rKWse03khvUPMCSjyR8-EzbJ2rIliYV9OzRa7TtA-LXJeUNMSHfwN6MhZJ1-_yEW-LVKXtzkxJOwNOcPYv2r8bAfjUjnxSQ9HW4G-oP5QsPc8BWeQoyj3ESS4W-EdsnqfSdsfKxU3_S8EDbMXum0EmjdJA_STclOefVTSp7sy5huqMOgH7LWIP52yV4XJU2aFUJ5sEOlXFqmAS_5PBMIfZx0DS0O5Zo6K3e56pWfI9HQgZd1F9V8Lb4HldmrCBFTB5QsGpQG4Ket_KmJfnlxCxEKHFtLs5XA","reapit-connect-token":"eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmZDQzNDVjMy0zMTkzLTQ4YmQtYTg5ZS1kMGIyNWJmOTE0YTQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiOG9haTdpbzY1OGZlNDltdXI4ZWZsbjY4aCIsIm9yaWdpbl9qdGkiOiI3YjlkN2Q4MC0zM2FhLTQ5MzEtYmY0Yi1jNTZjNDQ5NDY0YzAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvbGFuZGxvcmRzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmVycy5yZWFkIGFnZW5jeUNsb3VkXC9hcHBsaWNhbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy5yZWFkIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwvaWRlbnRpdHljaGVja3MucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3BheW1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL2FwcG9pbnRtZW50cy53cml0ZSBhZ2VuY3lDbG91ZFwva2V5cy5yZWFkIGFnZW5jeUNsb3VkXC90ZW5hbmNpZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLnJlYWQgZW1haWwgYWdlbmN5Q2xvdWRcL2ltYWdlcy5yZWFkIG9wZW5pZCBwcm9maWxlIGFnZW5jeUNsb3VkXC93b3Jrc29yZGVycy5yZWFkIGFnZW5jeUNsb3VkXC9uZWdvdGlhdG9ycy53cml0ZSBhZ2VuY3lDbG91ZFwvYXBwbGljYW50cy5yZWFkIGFnZW5jeUNsb3VkXC9uZWdvdGlhdG9ycy5yZWFkIHBob25lIGFnZW5jeUNsb3VkXC9qb3VybmFsZW50cmllcy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZpY2VzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy5yZWFkIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMucmVhZCBhZ2VuY3lDbG91ZFwvdHJhbnNhY3Rpb25zLnJlYWQiLCJhdXRoX3RpbWUiOjE2NDA1ODYxMzEsImV4cCI6MTY0MDYwNDIzMiwiaWF0IjoxNjQwNjAwNjMyLCJqdGkiOiI5NDhhMTRiMy1hNGEzLTQ2OTgtYWZiOC1mZDZlZGI2ZTc0OTYiLCJ1c2VybmFtZSI6ImZkNDM0NWMzLTMxOTMtNDhiZC1hODllLWQwYjI1YmY5MTRhNCJ9.RLYgM-EimSDBioe4VoQpkssFfn8Yn_3IFTLKNKeqYukpo5INGYeb-bFmgUGzx3GsQlajNACwJTro8tn0xy7fyYup7n0lDPDTSrqdjnJXJWP_S48EsWyfpyQM3_vOQvNDHwOK7xjcYAimHZmm4pJM8d_amfSaeOc9e0g8GmstJklWIpey3ZCoP7zrDHRVQaTraZMmZpgUM58WrnbfWk0z8B3jUQFCthD8xx8ypXSMla7Q1hrdmUAgMpr6HQSyvmS918E36VybmOFoksT_N3jpF_fe_mJKweagD4s7dqBj6LATCGsoeAthNhNhUucaNhYimBComc4R-mrfkyvSZcGuAQ"}}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  geolocation?: InputMaybe<AddressInputGeolocationInput>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type AddressInputGeolocationInput = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type ApplicantAddress = {
  __typename?: 'ApplicantAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type ApplicantAddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type ApplicantBuying = {
  __typename?: 'ApplicantBuying';
  priceFrom?: Maybe<Scalars['Int']>;
  priceTo?: Maybe<Scalars['Int']>;
};

export type ApplicantBuyingInput = {
  priceFrom?: InputMaybe<Scalars['Int']>;
  priceTo?: InputMaybe<Scalars['Int']>;
};

export type ApplicantContactRelationshipModel = {
  __typename?: 'ApplicantContactRelationshipModel';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  applicantId?: Maybe<Scalars['String']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['String']>;
};

export type ApplicantExternalArea = {
  __typename?: 'ApplicantExternalArea';
  amountFrom?: Maybe<Scalars['Int']>;
  amountTo?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ApplicantExternalAreaInput = {
  amountFrom?: InputMaybe<Scalars['Int']>;
  amountTo?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ApplicantInternalArea = {
  __typename?: 'ApplicantInternalArea';
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ApplicantInternalAreaInput = {
  amount?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ApplicantModel = {
  __typename?: 'ApplicantModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedApplicantModel>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  age?: Maybe<Array<Maybe<Scalars['String']>>>;
  bathroomsMax?: Maybe<Scalars['Int']>;
  bathroomsMin?: Maybe<Scalars['Int']>;
  bedroomsMax?: Maybe<Scalars['Int']>;
  bedroomsMin?: Maybe<Scalars['Int']>;
  buying?: Maybe<ApplicantBuying>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
  externalArea?: Maybe<ApplicantExternalArea>;
  id?: Maybe<Scalars['String']>;
  internalArea?: Maybe<ApplicantInternalArea>;
  lastCall?: Maybe<Scalars['String']>;
  locality?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationType?: Maybe<Scalars['String']>;
  marketingMode?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  nextCall?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  officeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  parking?: Maybe<Array<Maybe<Scalars['String']>>>;
  receptionsMax?: Maybe<Scalars['Int']>;
  receptionsMin?: Maybe<Scalars['Int']>;
  related?: Maybe<Array<Maybe<ApplicantRelate>>>;
  renting?: Maybe<ApplicantRenting>;
  situation?: Maybe<Array<Maybe<Scalars['String']>>>;
  solicitorId?: Maybe<Scalars['String']>;
  source?: Maybe<ApplicantSource>;
  style?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ApplicantQueryEmbed {
  Appointments = 'appointments',
  Areas = 'areas',
  Department = 'department',
  Documents = 'documents',
  Negotiators = 'negotiators',
  Offers = 'offers',
  Offices = 'offices',
  Solicitor = 'solicitor',
  Source = 'source'
}

export type ApplicantRelate = {
  __typename?: 'ApplicantRelate';
  email?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<ApplicantAddress>;
  type?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type ApplicantRelateInput = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
};

export type ApplicantRenting = {
  __typename?: 'ApplicantRenting';
  furnishing?: Maybe<Array<Maybe<Scalars['String']>>>;
  moveDate?: Maybe<Scalars['String']>;
  rentFrequency?: Maybe<Scalars['String']>;
  rentFrom?: Maybe<Scalars['Int']>;
  rentTo?: Maybe<Scalars['Int']>;
  term?: Maybe<Scalars['String']>;
};

export type ApplicantRentingInput = {
  furnishing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moveDate?: InputMaybe<Scalars['String']>;
  rentFrequency?: InputMaybe<Scalars['String']>;
  rentFrom?: InputMaybe<Scalars['Int']>;
  rentTo?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};

export type ApplicantSource = {
  __typename?: 'ApplicantSource';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ApplicantSourceInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AppointmentAttendeeModel = {
  __typename?: 'AppointmentAttendeeModel';
  contacts?: Maybe<Array<AppointmentContactModel>>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AppointmentContactModel = {
  __typename?: 'AppointmentContactModel';
  email?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type AppointmentModel = {
  __typename?: 'AppointmentModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedAppointmentModel>;
  _links?: Maybe<Scalars['JSON']>;
  accompanied?: Maybe<Scalars['Boolean']>;
  appointmentType?: Maybe<ListItemModel>;
  attendee?: Maybe<AppointmentAttendeeModel>;
  attendeeConfirmed?: Maybe<Scalars['Boolean']>;
  cancelled?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  followUp?: Maybe<AppointmentModelFollowUp>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorConfirmed?: Maybe<Scalars['Boolean']>;
  negotiatorIds?: Maybe<Array<Scalars['String']>>;
  negotiators?: Maybe<Array<Maybe<NegotiatorModel>>>;
  officeIds?: Maybe<Array<Scalars['String']>>;
  offices?: Maybe<Array<Maybe<OfficeModel>>>;
  organiserId?: Maybe<Scalars['String']>;
  property?: Maybe<PropertyModel>;
  propertyConfirmed?: Maybe<Scalars['Boolean']>;
  propertyId?: Maybe<Scalars['String']>;
  recurring?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type AppointmentModelFollowUp = {
  __typename?: 'AppointmentModelFollowUp';
  due?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  responseId?: Maybe<Scalars['String']>;
};

export type AppointmentModelRecurrenceInput = {
  interval?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  until?: InputMaybe<Scalars['String']>;
};

export enum AppointmentQueryEmbed {
  Negotiators = 'negotiators',
  Offices = 'offices',
  Organiser = 'organiser',
  Property = 'property',
  Type = 'type'
}

export type AreaModel = {
  __typename?: 'AreaModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Array<Scalars['String']>>;
  created?: Maybe<Scalars['String']>;
  departmentIds?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  officeIds?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
};

/** Representation of a company */
export type CompanyModel = {
  __typename?: 'CompanyModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedCompanyRoleModel>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<CompanyModel_Address>;
  branch?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  mobilePhone?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  supplierTypeId?: Maybe<Scalars['String']>;
  typeIds?: Maybe<Array<Scalars['String']>>;
  vatRegistered?: Maybe<Scalars['Boolean']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type CompanyModelAddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CompanyModelPagedResult = {
  __typename?: 'CompanyModelPagedResult';
  _embedded?: Maybe<Array<CompanyModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type CompanyModel_Address = {
  __typename?: 'CompanyModel_address';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export enum CompanyQueryEmbed {
  CompanyTypes = 'companyTypes'
}

export type CompanyRoleModel = {
  __typename?: 'CompanyRoleModel';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
};

export type CompanyRoleModelPagedResult = {
  __typename?: 'CompanyRoleModelPagedResult';
  _embedded?: Maybe<Array<CompanyRoleModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export enum ConfigurationType {
  AppointmentTypes = 'appointmentTypes',
  CompanyTypes = 'companyTypes',
  DocumentTypes = 'documentTypes',
  FollowUpResponses = 'followUpResponses',
  IdentityDocumentTypes = 'identityDocumentTypes',
  JournalEntryTypes = 'journalEntryTypes',
  KeyTypes = 'keyTypes',
  SellingReasons = 'sellingReasons',
  SupplierTypes = 'supplierTypes',
  TaskTypes = 'taskTypes',
  TenancyTypes = 'tenancyTypes',
  VendorTypes = 'vendorTypes',
  WorksOrderTypes = 'worksOrderTypes'
}

export type ContactModel = {
  __typename?: 'ContactModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedContactModel>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  archivedOn?: Maybe<Scalars['String']>;
  communicationPreferenceEmail?: Maybe<Scalars['Boolean']>;
  communicationPreferenceLetter?: Maybe<Scalars['Boolean']>;
  communicationPreferencePhone?: Maybe<Scalars['Boolean']>;
  communicationPreferenceSMS?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  fromArchive?: Maybe<Scalars['Boolean']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identityCheck?: Maybe<Scalars['String']>;
  marketingConsent?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  mobilePhone?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorIds?: Maybe<Array<Scalars['String']>>;
  officeIds?: Maybe<Array<Scalars['String']>>;
  primaryAddress?: Maybe<ContactModelAddress>;
  secondaryAddress?: Maybe<ContactModelAddress>;
  source?: Maybe<ContactModelSource>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  workAddress?: Maybe<ContactModelAddress>;
  workPhone?: Maybe<Scalars['String']>;
};

export type ContactModelAddress = {
  __typename?: 'ContactModelAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactModelAddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ContactModelSource = {
  __typename?: 'ContactModelSource';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactModelSourceInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export enum ContactQueryEmbed {
  Documents = 'documents',
  IdentityChecks = 'identityChecks',
  Negotiators = 'negotiators',
  Offices = 'offices',
  Source = 'source'
}

/** Representation of an offers sales progression information */
export type ConveyancingModel = {
  __typename?: 'ConveyancingModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedConveyancingModel>;
  _links?: Maybe<Scalars['JSON']>;
  additionalSurveyDate?: Maybe<Scalars['String']>;
  additionalSurveyRequired?: Maybe<Scalars['String']>;
  additionalSurveyorId?: Maybe<Scalars['String']>;
  buyer?: Maybe<Scalars['String']>;
  buyerId?: Maybe<Scalars['String']>;
  buyerSolicitorId?: Maybe<Scalars['String']>;
  completion?: Maybe<Scalars['String']>;
  contractApproved?: Maybe<Scalars['String']>;
  contractBuyerSigned?: Maybe<Scalars['String']>;
  contractReceived?: Maybe<Scalars['String']>;
  contractSent?: Maybe<Scalars['String']>;
  contractVendorSigned?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deedsReceived?: Maybe<Scalars['String']>;
  deedsRequested?: Maybe<Scalars['String']>;
  downwardChainId?: Maybe<Scalars['String']>;
  enquiriesAnswered?: Maybe<Scalars['String']>;
  enquiriesSent?: Maybe<Scalars['String']>;
  exchangedBuyer?: Maybe<Scalars['String']>;
  exchangedVendor?: Maybe<Scalars['String']>;
  externalAgent?: Maybe<Scalars['String']>;
  externalAgentId?: Maybe<Scalars['String']>;
  fixturesAndFittingsCompleted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isExternal?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  mortgageBrokerId?: Maybe<Scalars['String']>;
  mortgageLenderId?: Maybe<Scalars['String']>;
  mortgageLoanPercentage?: Maybe<Scalars['Int']>;
  mortgageOfferReceived?: Maybe<Scalars['String']>;
  mortgageRequired?: Maybe<Scalars['String']>;
  mortgageSubmitted?: Maybe<Scalars['String']>;
  mortgageSurveyDate?: Maybe<Scalars['String']>;
  mortgageSurveyorId?: Maybe<Scalars['String']>;
  propertyAddress?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  searchesApplied?: Maybe<Scalars['String']>;
  searchesPaid?: Maybe<Scalars['String']>;
  searchesReceived?: Maybe<Scalars['String']>;
  upwardChainId?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorSolicitorId?: Maybe<Scalars['String']>;
};

export type ConveyancingModelPagedResult = {
  __typename?: 'ConveyancingModelPagedResult';
  _embedded?: Maybe<Array<ConveyancingModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export enum ConveyancingQueryEmbed {
  BuyerSolicitor = 'buyerSolicitor',
  Offer = 'offer',
  Property = 'property',
  Vendor = 'vendor',
  VendorSolicitor = 'vendorSolicitor'
}

export type CreateAppointmentModelAttendeeInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CreateLandlordRelatedModel = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
};

export type CreatePropertyRoomModelInput = {
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateTenancyRequestModelSource = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type DepartmentModel = {
  __typename?: 'DepartmentModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  ageOptions?: Maybe<Array<Scalars['String']>>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  localityOptions?: Maybe<Array<Scalars['String']>>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parkingOptions?: Maybe<Array<Scalars['String']>>;
  situationOptions?: Maybe<Array<Scalars['String']>>;
  styleOptions?: Maybe<Array<Scalars['String']>>;
  typeOptions?: Maybe<Array<Scalars['String']>>;
};

export type DepartmentModelPagedResult = {
  __typename?: 'DepartmentModelPagedResult';
  _embedded?: Maybe<Array<DepartmentModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type DocumentModel = {
  __typename?: 'DocumentModel';
  _eTag?: Maybe<Scalars['JSON']>;
  _embedded?: Maybe<EmbeddedDocumentModel>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export enum DocumentQueryEmbed {
  DocumentType = 'documentType'
}

export type DocumentType = {
  __typename?: 'DocumentType';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type EmbeddedApplicantModel = {
  __typename?: 'EmbeddedApplicantModel';
  appointments?: Maybe<Array<Maybe<AppointmentModel>>>;
  areas?: Maybe<Array<Maybe<AreaModel>>>;
  department?: Maybe<DepartmentModel>;
  documents?: Maybe<Array<Maybe<DocumentModel>>>;
  negotiators?: Maybe<Array<Maybe<NegotiatorModel>>>;
  offers?: Maybe<Array<Maybe<OfferModel>>>;
  offices?: Maybe<Array<Maybe<OfficeModel>>>;
  solicitor?: Maybe<CompanyModel>;
  source?: Maybe<SourceModel>;
};

export type EmbeddedAppointmentModel = {
  __typename?: 'EmbeddedAppointmentModel';
  negotiators?: Maybe<Array<Maybe<NegotiatorModel>>>;
  offices?: Maybe<Array<Maybe<OfficeModel>>>;
  organiser?: Maybe<NegotiatorModel>;
  property?: Maybe<PropertyModel>;
  type?: Maybe<ListItemModel>;
};

export type EmbeddedCompanyRoleModel = {
  __typename?: 'EmbeddedCompanyRoleModel';
  companyTypes?: Maybe<Array<Maybe<ListItemModel>>>;
};

export type EmbeddedContactModel = {
  __typename?: 'EmbeddedContactModel';
  documents?: Maybe<Array<Maybe<DocumentModel>>>;
  identityChecks?: Maybe<Array<Maybe<IdentityCheckModel>>>;
  negotiators?: Maybe<Array<Maybe<NegotiatorModel>>>;
  offices?: Maybe<Array<Maybe<OfficeModel>>>;
  source?: Maybe<SourceModel>;
};

export type EmbeddedConveyancingModel = {
  __typename?: 'EmbeddedConveyancingModel';
  buyerSolicitor?: Maybe<CompanyModel>;
  offer?: Maybe<OfferModel>;
  property?: Maybe<PropertyModel>;
  vendor?: Maybe<VendorModel>;
  vendorSolicitor?: Maybe<CompanyModel>;
};

export type EmbeddedDocumentModel = {
  __typename?: 'EmbeddedDocumentModel';
  documentType?: Maybe<Array<Maybe<DocumentType>>>;
};

export type EmbeddedIdentityCheckModel = {
  __typename?: 'EmbeddedIdentityCheckModel';
  contact?: Maybe<ContactModel>;
  document1?: Maybe<DocumentModel>;
  document2?: Maybe<DocumentModel>;
  documentType1?: Maybe<ListItemModel>;
  documentType2?: Maybe<ListItemModel>;
};

export type EmbeddedLandlordModel = {
  __typename?: 'EmbeddedLandlordModel';
  appointments?: Maybe<Array<Maybe<AppointmentModel>>>;
  documents?: Maybe<Array<Maybe<DocumentModel>>>;
  office?: Maybe<OfficeModel>;
  properties?: Maybe<Array<Maybe<PropertyModel>>>;
  solicitor?: Maybe<CompanyModel>;
  source?: Maybe<SourceModel>;
};

export type EmbeddedNegotiatorModel = {
  __typename?: 'EmbeddedNegotiatorModel';
  office?: Maybe<OfficeModel>;
};

export type EmbeddedOfferModel = {
  __typename?: 'EmbeddedOfferModel';
  applicant?: Maybe<ApplicantModel>;
  conveyancing?: Maybe<ConveyancingModel>;
  negotiator?: Maybe<NegotiatorModel>;
  property?: Maybe<PropertyModel>;
};

export type EmbeddedOfficeModel = {
  __typename?: 'EmbeddedOfficeModel';
  negotiators?: Maybe<Array<Maybe<NegotiatorModel>>>;
};

export type EmbeddedPropertyImageModel = {
  __typename?: 'EmbeddedPropertyImageModel';
  property?: Maybe<PropertyModel>;
};

export type EmbeddedPropertyModel = {
  __typename?: 'EmbeddedPropertyModel';
  appointments?: Maybe<Array<Maybe<AppointmentModel>>>;
  area?: Maybe<AreaModel>;
  department?: Maybe<DepartmentModel>;
  documents?: Maybe<Array<Maybe<DocumentModel>>>;
  images?: Maybe<Array<Maybe<PropertyImageModel>>>;
  landlord?: Maybe<LandlordModel>;
  negotiator?: Maybe<NegotiatorModel>;
  offers?: Maybe<Array<Maybe<OfferModel>>>;
  tenancies?: Maybe<Array<Maybe<TenancyModel>>>;
  vendor?: Maybe<VendorModel>;
};

export type EmbeddedTaskModel = {
  __typename?: 'EmbeddedTaskModel';
  applicant?: Maybe<ApplicantModel>;
  contact?: Maybe<ContactModel>;
  landlord?: Maybe<LandlordModel>;
  property?: Maybe<PropertyModel>;
  tenancy?: Maybe<TenancyModel>;
  type?: Maybe<ListItemModel>;
};

export type EmbeddedTenancyModel = {
  __typename?: 'EmbeddedTenancyModel';
  applicant?: Maybe<ApplicantModel>;
  appointments?: Maybe<Array<Maybe<AppointmentModel>>>;
  documents?: Maybe<Array<Maybe<DocumentModel>>>;
  negotiator?: Maybe<NegotiatorModel>;
  property?: Maybe<PropertyModel>;
  source?: Maybe<SourceModel>;
  tasks?: Maybe<Array<Maybe<TaskModel>>>;
  type?: Maybe<ListItemModel>;
};

export type EmbeddedVendorModel = {
  __typename?: 'EmbeddedVendorModel';
  negotiator?: Maybe<NegotiatorModel>;
  offices?: Maybe<Array<Maybe<OfficeModel>>>;
  property?: Maybe<PropertyModel>;
  sellingReason?: Maybe<Scalars['JSON']>;
  solicitor?: Maybe<CompanyModel>;
  source?: Maybe<SourceModel>;
  type?: Maybe<ListItemModel>;
};

export type EnquiryAddress = {
  __typename?: 'EnquiryAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type EnquiryAddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type EnquiryModel = {
  __typename?: 'EnquiryModel';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  address?: Maybe<EnquiryAddress>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  enquiryType?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  marketingConsent?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  officeId?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  propertyIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type EpcInput = {
  eer?: InputMaybe<Scalars['Int']>;
  eerPotential?: InputMaybe<Scalars['Int']>;
  eir?: InputMaybe<Scalars['Int']>;
  eirPotential?: InputMaybe<Scalars['Int']>;
  exempt?: InputMaybe<Scalars['Boolean']>;
};

export type ExternalAreaInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IdentityCheckModel = {
  __typename?: 'IdentityCheckModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedIdentityCheckModel>;
  _links?: Maybe<Scalars['JSON']>;
  checkDate?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identityDocument1?: Maybe<IdentityCheckModelIdentityDocument>;
  identityDocument2?: Maybe<IdentityCheckModelIdentityDocument>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type IdentityCheckModelIdentityDocument = {
  __typename?: 'IdentityCheckModelIdentityDocument';
  details?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['String']>;
  expiry?: Maybe<Scalars['String']>;
  fileData?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type IdentityCheckModelIdentityDocumentInput = {
  details?: InputMaybe<Scalars['String']>;
  expiry?: InputMaybe<Scalars['String']>;
  fileData?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};

export enum IdentityCheckQueryEmbed {
  Contact = 'contact',
  Document1 = 'document1',
  Document2 = 'document2',
  DocumentType1 = 'documentType1',
  DocumentType2 = 'documentType2'
}

export type IndividualKeyModel = {
  __typename?: 'IndividualKeyModel';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IndividualKeyModelInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type InputWorksOrderItem = {
  chargeTo: Scalars['String'];
  estimate?: InputMaybe<Scalars['Float']>;
  estimateType?: InputMaybe<Scalars['String']>;
  netAmount?: InputMaybe<Scalars['Float']>;
  notes: Scalars['String'];
  vatAmount?: InputMaybe<Scalars['Float']>;
};

export type InternalAreaInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type JournalEntryModel = {
  __typename?: 'JournalEntryModel';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type JournalEntryModelPagedResult = {
  __typename?: 'JournalEntryModelPagedResult';
  _embedded?: Maybe<Array<JournalEntryModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export enum KeyEmbed {
  Movements = 'movements'
}

export type KeyModel = {
  __typename?: 'KeyModel';
  created?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keysInSet?: Maybe<Array<Maybe<IndividualKeyModel>>>;
  modified?: Maybe<Scalars['String']>;
  movements?: Maybe<Array<Maybe<KeyMovementModel>>>;
  number?: Maybe<Scalars['String']>;
  office?: Maybe<OfficeModel>;
  status?: Maybe<KeyStatus>;
  type?: Maybe<KeyType>;
};

export type KeyModelInput = {
  keysInSet?: InputMaybe<Array<InputMaybe<IndividualKeyModelInput>>>;
  number: Scalars['String'];
  officeId: Scalars['String'];
  typeId: Scalars['String'];
};

export type KeyMovementModel = {
  __typename?: 'KeyMovementModel';
  checkInAt?: Maybe<Scalars['String']>;
  checkInNegotiator?: Maybe<NegotiatorModel>;
  checkOutAt?: Maybe<Scalars['String']>;
  checkOutNegotiator?: Maybe<NegotiatorModel>;
  checkOutToContact?: Maybe<ContactModel>;
  checkOutToNegotiator?: Maybe<NegotiatorModel>;
  created?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  modified?: Maybe<Scalars['String']>;
};

export type KeyMovementModelInput = {
  checkInRequired: Scalars['Boolean'];
  checkOutNegotiatorId: Scalars['String'];
  checkOutToId: Scalars['String'];
  checkOutToType: Scalars['String'];
};

export enum KeyStatus {
  CheckedIn = 'checkedIn',
  CheckedOut = 'checkedOut',
  NoLongerHeld = 'noLongerHeld'
}

export type KeyType = {
  __typename?: 'KeyType';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type LandLordSourceInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type LandlordModel = {
  __typename?: 'LandlordModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedLandlordModel>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  officeId?: Maybe<Scalars['String']>;
  related?: Maybe<Array<LandlordRelatedModel>>;
  solicitorId?: Maybe<Scalars['String']>;
  source?: Maybe<LandlordSourceModel>;
};

export enum LandlordQueryEmbed {
  Appointments = 'appointments',
  Documents = 'documents',
  Office = 'office',
  Properties = 'properties',
  Solicitor = 'solicitor',
  Source = 'source'
}

export type LandlordRelatedModel = {
  __typename?: 'LandlordRelatedModel';
  email?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<LandlordRelatedPrimaryAddressModel>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type LandlordRelatedPrimaryAddressModel = {
  __typename?: 'LandlordRelatedPrimaryAddressModel';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type LandlordRelationshipModel = {
  __typename?: 'LandlordRelationshipModel';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  landlordId?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
};

export type LandlordSourceModel = {
  __typename?: 'LandlordSourceModel';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ListItemModel = {
  __typename?: 'ListItemModel';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateApplicant: ApplicantModel;
  CreateApplicantRelationship?: Maybe<ApplicantContactRelationshipModel>;
  CreateAppointment: Scalars['JSON'];
  CreateArea: Scalars['JSON'];
  CreateCompany: CompanyModel;
  CreateContact: Scalars['JSON'];
  CreateDocument: DocumentModel;
  CreateDownwardLinkModel: ConveyancingModel;
  CreateEnquiry: EnquiryModel;
  CreateIdentityCheck: Scalars['JSON'];
  CreateJournalEntry: Scalars['Boolean'];
  CreateKey?: Maybe<KeyModel>;
  CreateKeyMovement?: Maybe<KeyMovementModel>;
  CreateLandlord: LandlordModel;
  CreateLandlordRelationship: LandlordRelationshipModel;
  CreateNegotiator: NegotiatorModel;
  CreateOffer: OfferModel;
  CreateOffice: OfficeModel;
  CreateProperty: PropertyModel;
  CreatePropertyImage: PropertyImageModel;
  CreateSource: SourceModel;
  CreateTask: TaskModel;
  CreateTenancy: TenancyModel;
  CreateTenancyCheck: TenancyCheckModel;
  CreateUpwardLinkModel: ConveyancingModel;
  CreateVendorRelationship: Scalars['Boolean'];
  CreateWorksOrder: WorkOrder;
  CreateWorksOrderItem: WorksOrderItem;
  DeleteApplicantRelationship: Scalars['String'];
  DeleteDocument: Scalars['String'];
  DeleteDownwardLinkModel: Scalars['String'];
  DeleteLandlordRelationship?: Maybe<Scalars['String']>;
  DeletePropertyImage: Scalars['Boolean'];
  DeleteTenancyCheck: Scalars['Boolean'];
  DeleteUpwardLinkModel: Scalars['String'];
  DeleteVendorRelationship: Scalars['Boolean'];
  DeleteWorksOrderItem?: Maybe<Scalars['Boolean']>;
  UpdateApplicant: ApplicantModel;
  UpdateAppointment: AppointmentModel;
  UpdateArea: AreaModel;
  UpdateCompany: CompanyModel;
  UpdateContact: ContactModel;
  UpdateConveyancing: ConveyancingModel;
  UpdateDocument: DocumentModel;
  UpdateIdentityCheck: IdentityCheckModel;
  UpdateKeyMovement?: Maybe<KeyMovementModel>;
  UpdateLandlord: LandlordModel;
  UpdateNegotiator: NegotiatorModel;
  UpdateOffer: OfferModel;
  UpdateOffice: OfficeModel;
  UpdateProperty: PropertyModel;
  UpdatePropertyImage: PropertyImageModel;
  UpdateSource: SourceModel;
  UpdateTask: TaskModel;
  UpdateTenancyCheck: TenancyCheckModel;
  UpdateVendor: VendorModel;
  UpdateWorksOrder: WorkOrder;
  UpdateWorksOrderItem: WorksOrderItem;
};


export type MutationCreateApplicantArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bathroomsMax?: InputMaybe<Scalars['Int']>;
  bathroomsMin?: InputMaybe<Scalars['Int']>;
  bedroomsMax?: InputMaybe<Scalars['Int']>;
  bedroomsMin?: InputMaybe<Scalars['Int']>;
  buying?: InputMaybe<ApplicantBuyingInput>;
  departmentId?: InputMaybe<Scalars['String']>;
  externalArea?: InputMaybe<ApplicantExternalAreaInput>;
  internalArea?: InputMaybe<ApplicantInternalAreaInput>;
  lastCall?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locationOptions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locationType?: InputMaybe<Scalars['String']>;
  marketingMode?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nextCall?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receptionsMax?: InputMaybe<Scalars['Int']>;
  receptionsMin?: InputMaybe<Scalars['Int']>;
  related?: InputMaybe<Array<InputMaybe<ApplicantRelateInput>>>;
  renting?: InputMaybe<ApplicantRentingInput>;
  situation?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  solicitorId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<ApplicantSourceInput>;
  style?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateApplicantRelationshipArgs = {
  associatedId: Scalars['String'];
  associatedType: Scalars['String'];
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
};


export type MutationCreateAppointmentArgs = {
  accompanied?: InputMaybe<Scalars['Boolean']>;
  attendee?: InputMaybe<CreateAppointmentModelAttendeeInput>;
  attendeeConfirmed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  followUpOn?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorConfirmed?: InputMaybe<Scalars['Boolean']>;
  negotiatorIds?: InputMaybe<Array<Scalars['String']>>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  organiserId?: InputMaybe<Scalars['String']>;
  propertyConfirmed?: InputMaybe<Scalars['Boolean']>;
  propertyId?: InputMaybe<Scalars['String']>;
  recurrence?: InputMaybe<AppointmentModelRecurrenceInput>;
  start?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateAreaArgs = {
  area?: InputMaybe<Array<Scalars['String']>>;
  departmentIds?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  parentId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCompanyArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<CompanyModelAddressInput>;
  branch?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  supplierTypeId?: InputMaybe<Scalars['String']>;
  typeIds?: InputMaybe<Array<Scalars['String']>>;
  vatRegistered?: InputMaybe<Scalars['Boolean']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationCreateContactArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  forename?: InputMaybe<Scalars['String']>;
  homePhone?: InputMaybe<Scalars['String']>;
  marketingConsent?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  negotiatorIds?: InputMaybe<Array<Scalars['String']>>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  primaryAddress?: InputMaybe<ContactModelAddressInput>;
  secondaryAddress?: InputMaybe<ContactModelAddressInput>;
  source?: InputMaybe<ContactModelSourceInput>;
  surname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  workAddress?: InputMaybe<ContactModelAddressInput>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDocumentArgs = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
  fileData?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDownwardLinkModelArgs = {
  agent?: InputMaybe<Scalars['String']>;
  buyer?: InputMaybe<Scalars['String']>;
  buyerSolicitorId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  offerId?: InputMaybe<Scalars['String']>;
  propertyAddress?: InputMaybe<Scalars['String']>;
};


export type MutationCreateEnquiryArgs = {
  address?: InputMaybe<EnquiryAddressInput>;
  email?: InputMaybe<Scalars['String']>;
  enquiryType?: InputMaybe<Scalars['String']>;
  forename?: InputMaybe<Scalars['String']>;
  homePhone?: InputMaybe<Scalars['String']>;
  marketingConsent?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  propertyIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sourceName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationCreateIdentityCheckArgs = {
  checkDate?: InputMaybe<Scalars['String']>;
  contactId?: InputMaybe<Scalars['String']>;
  identityDocument1?: InputMaybe<IdentityCheckModelIdentityDocumentInput>;
  identityDocument2?: InputMaybe<IdentityCheckModelIdentityDocumentInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationCreateJournalEntryArgs = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  propertyId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateKeyArgs = {
  key?: InputMaybe<KeyModelInput>;
  propertyId: Scalars['ID'];
};


export type MutationCreateKeyMovementArgs = {
  keyId: Scalars['ID'];
  movement?: InputMaybe<KeyMovementModelInput>;
  propertyId: Scalars['ID'];
};


export type MutationCreateLandlordArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  officeId?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Array<CreateLandlordRelatedModel>>;
  solicitorId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<LandLordSourceInput>;
};


export type MutationCreateLandlordRelationshipArgs = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isMain?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNegotiatorArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOfferArgs = {
  amount?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Scalars['String']>;
  conditions?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  exclusions?: InputMaybe<Scalars['String']>;
  inclusions?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOfficeArgs = {
  address?: InputMaybe<OfficeModelAddressInput>;
  email?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePropertyArgs = {
  address?: InputMaybe<AddressInput>;
  age?: InputMaybe<Array<Scalars['String']>>;
  areaId?: InputMaybe<Scalars['String']>;
  bathrooms?: InputMaybe<Scalars['Int']>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  councilTax?: InputMaybe<Scalars['String']>;
  departmentId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  epc?: InputMaybe<EpcInput>;
  externalArea?: InputMaybe<ExternalAreaInput>;
  internalArea?: InputMaybe<InternalAreaInput>;
  internetAdvertising?: InputMaybe<Scalars['Boolean']>;
  letting?: InputMaybe<LettingInput>;
  locality?: InputMaybe<Array<Scalars['String']>>;
  marketingMode?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  parking?: InputMaybe<Array<Scalars['String']>>;
  receptions?: InputMaybe<Scalars['Int']>;
  rooms?: InputMaybe<Array<CreatePropertyRoomModelInput>>;
  selling?: InputMaybe<SellingInput>;
  situation?: InputMaybe<Array<Scalars['String']>>;
  strapline?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Array<Scalars['String']>>;
  summary?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
  videoCaption?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  viewingArrangements?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePropertyImageArgs = {
  caption?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationCreateSourceArgs = {
  departmentIds?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTaskArgs = {
  activates?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['String']>;
  contactId?: InputMaybe<Scalars['String']>;
  landlordId?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  propertyId?: InputMaybe<Scalars['String']>;
  recipientId?: InputMaybe<Scalars['String']>;
  recipientType?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
  tenancyId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTenancyArgs = {
  agentRole?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  isPeriodic?: InputMaybe<Scalars['Boolean']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  rent?: InputMaybe<Scalars['Int']>;
  rentFrequency?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<CreateTenancyRequestModelSource>;
  startDate?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTenancyCheckArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUpwardLinkModelArgs = {
  agent?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  offerId?: InputMaybe<Scalars['String']>;
  propertyAddress?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
  vendorSolicitorId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateVendorRelationshipArgs = {
  associatedId?: InputMaybe<Scalars['String']>;
  associatedType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isMain?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateWorksOrderArgs = {
  booked?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  items?: InputMaybe<Array<InputWorksOrderItem>>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId: Scalars['String'];
  propertyId: Scalars['String'];
  reporter: Scalars['String'];
  required?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  tenancyId?: InputMaybe<Scalars['String']>;
  typeId: Scalars['String'];
};


export type MutationCreateWorksOrderItemArgs = {
  chargeTo: Scalars['String'];
  estimate?: InputMaybe<Scalars['Float']>;
  estimateType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  netAmount?: InputMaybe<Scalars['Float']>;
  notes: Scalars['String'];
  vatAmount?: InputMaybe<Scalars['Float']>;
};


export type MutationDeleteApplicantRelationshipArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDownwardLinkModelArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLandlordRelationshipArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type MutationDeletePropertyImageArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTenancyCheckArgs = {
  checkId: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteUpwardLinkModelArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVendorRelationshipArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type MutationDeleteWorksOrderItemArgs = {
  id: Scalars['String'];
  itemId: Scalars['String'];
};


export type MutationUpdateApplicantArgs = {
  _eTag: Scalars['String'];
  active?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bathroomsMax?: InputMaybe<Scalars['Int']>;
  bathroomsMin?: InputMaybe<Scalars['Int']>;
  bedroomsMax?: InputMaybe<Scalars['Int']>;
  bedroomsMin?: InputMaybe<Scalars['Int']>;
  buying?: InputMaybe<ApplicantBuyingInput>;
  departmentId?: InputMaybe<Scalars['String']>;
  externalArea?: InputMaybe<ApplicantExternalAreaInput>;
  id: Scalars['String'];
  internalArea?: InputMaybe<ApplicantInternalAreaInput>;
  lastCall?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locationOptions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locationType?: InputMaybe<Scalars['String']>;
  marketingMode?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nextCall?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receptionsMax?: InputMaybe<Scalars['Int']>;
  receptionsMin?: InputMaybe<Scalars['Int']>;
  renting?: InputMaybe<ApplicantRentingInput>;
  situation?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  solicitorId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<ApplicantSourceInput>;
  style?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateAppointmentArgs = {
  _eTag: Scalars['String'];
  accompanied?: InputMaybe<Scalars['Boolean']>;
  attendee?: InputMaybe<UpdateAppointmentModelAttendeeInput>;
  attendeeConfirmed?: InputMaybe<Scalars['Boolean']>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  followUp?: InputMaybe<UpdateAppointmentModelFollowUpInput>;
  followUpOn?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorConfirmed?: InputMaybe<Scalars['Boolean']>;
  negotiatorIds?: InputMaybe<Array<Scalars['String']>>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  organiserId?: InputMaybe<Scalars['String']>;
  propertyConfirmed?: InputMaybe<Scalars['Boolean']>;
  propertyId?: InputMaybe<Scalars['String']>;
  recurrence?: InputMaybe<AppointmentModelRecurrenceInput>;
  start?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAreaArgs = {
  _eTag: Scalars['String'];
  area?: InputMaybe<Array<Scalars['String']>>;
  departmentIds?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateCompanyArgs = {
  _eTag: Scalars['String'];
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<CompanyModelAddressInput>;
  branch?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  supplierTypeId?: InputMaybe<Scalars['String']>;
  typeIds?: InputMaybe<Array<Scalars['String']>>;
  vatRegistered?: InputMaybe<Scalars['Boolean']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateContactArgs = {
  _eTag: Scalars['String'];
  active?: InputMaybe<Scalars['Boolean']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  forename?: InputMaybe<Scalars['String']>;
  homePhone?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  marketingConsent?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  negotiatorIds?: InputMaybe<Array<Scalars['String']>>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  primaryAddress?: InputMaybe<ContactModelAddressInput>;
  secondaryAddress?: InputMaybe<ContactModelAddressInput>;
  source?: InputMaybe<ContactModelSourceInput>;
  surname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  workAddress?: InputMaybe<ContactModelAddressInput>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateConveyancingArgs = {
  _eTag: Scalars['String'];
  additionalSurveyDate?: InputMaybe<Scalars['String']>;
  additionalSurveyRequired?: InputMaybe<Scalars['String']>;
  additionalSurveyorId?: InputMaybe<Scalars['String']>;
  buyerSolicitorId?: InputMaybe<Scalars['String']>;
  completion?: InputMaybe<Scalars['String']>;
  contractApproved?: InputMaybe<Scalars['String']>;
  contractBuyerSigned?: InputMaybe<Scalars['String']>;
  contractReceived?: InputMaybe<Scalars['String']>;
  contractSent?: InputMaybe<Scalars['String']>;
  contractVendorSigned?: InputMaybe<Scalars['String']>;
  deedsReceived?: InputMaybe<Scalars['String']>;
  deedsRequested?: InputMaybe<Scalars['String']>;
  enquiriesAnswered?: InputMaybe<Scalars['String']>;
  enquiriesSent?: InputMaybe<Scalars['String']>;
  exchangedBuyer?: InputMaybe<Scalars['String']>;
  exchangedVendor?: InputMaybe<Scalars['String']>;
  fixturesAndFittingsCompleted?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  mortgageBrokerId?: InputMaybe<Scalars['String']>;
  mortgageLenderId?: InputMaybe<Scalars['String']>;
  mortgageLoanPercentage?: InputMaybe<Scalars['Int']>;
  mortgageOfferReceived?: InputMaybe<Scalars['String']>;
  mortgageRequired?: InputMaybe<Scalars['String']>;
  mortgageSubmitted?: InputMaybe<Scalars['String']>;
  mortgageSurveyDate?: InputMaybe<Scalars['String']>;
  mortgageSurveyorId?: InputMaybe<Scalars['String']>;
  searchesApplied?: InputMaybe<Scalars['String']>;
  searchesPaid?: InputMaybe<Scalars['String']>;
  searchesReceived?: InputMaybe<Scalars['String']>;
  vendorSolicitorId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  _eTag: Scalars['String'];
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateIdentityCheckArgs = {
  _eTag: Scalars['String'];
  checkDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  identityDocument1?: InputMaybe<IdentityCheckModelIdentityDocumentInput>;
  identityDocument2?: InputMaybe<IdentityCheckModelIdentityDocumentInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateKeyMovementArgs = {
  checkInNegotiatorId: Scalars['String'];
  keyId: Scalars['ID'];
  movementId: Scalars['ID'];
  propertyId: Scalars['ID'];
};


export type MutationUpdateLandlordArgs = {
  _eTag: Scalars['String'];
  active?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  officeId?: InputMaybe<Scalars['String']>;
  solicitorId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<LandLordSourceInput>;
};


export type MutationUpdateNegotiatorArgs = {
  _eTag: Scalars['String'];
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOfferArgs = {
  _eTag: Scalars['String'];
  amount?: InputMaybe<Scalars['String']>;
  conditions?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  exclusions?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  inclusions?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOfficeArgs = {
  _eTag: Scalars['String'];
  address?: InputMaybe<OfficeModelAddressInput>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  manager?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePropertyArgs = {
  _eTag: Scalars['String'];
  address?: InputMaybe<AddressInput>;
  age?: InputMaybe<Array<Scalars['String']>>;
  areaId?: InputMaybe<Scalars['String']>;
  bathrooms?: InputMaybe<Scalars['Int']>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  councilTax?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  epc?: InputMaybe<EpcInput>;
  externalArea?: InputMaybe<ExternalAreaInput>;
  id: Scalars['String'];
  internalArea?: InputMaybe<InternalAreaInput>;
  internetAdvertising?: InputMaybe<Scalars['Boolean']>;
  letting?: InputMaybe<LettingInput>;
  locality?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  parking?: InputMaybe<Array<Scalars['String']>>;
  receptions?: InputMaybe<Scalars['Int']>;
  selling?: InputMaybe<SellingInput>;
  situation?: InputMaybe<Array<Scalars['String']>>;
  strapline?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Array<Scalars['String']>>;
  summary?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
  videoCaption?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  viewingArrangements?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePropertyImageArgs = {
  _eTag: Scalars['String'];
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSourceArgs = {
  _eTag: Scalars['String'];
  departmentIds?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  officeIds?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTaskArgs = {
  _eTag: Scalars['String'];
  activates?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['String']>;
  contactId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  landlordId?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  propertyId?: InputMaybe<Scalars['String']>;
  recipientId?: InputMaybe<Scalars['String']>;
  recipientType?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
  tenancyId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTenancyCheckArgs = {
  _eTag: Scalars['String'];
  checkId: Scalars['String'];
  id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateVendorArgs = {
  _eTag: Scalars['String'];
  id: Scalars['String'];
  lastCall?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  nextCall?: InputMaybe<Scalars['String']>;
  sellingReasonId?: InputMaybe<Scalars['String']>;
  solicitorId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<VendorSourceInput>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateWorksOrderArgs = {
  _eTag: Scalars['String'];
  booked?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tenancyId?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateWorksOrderItemArgs = {
  _eTag: Scalars['String'];
  chargeTo?: InputMaybe<Scalars['String']>;
  estimate?: InputMaybe<Scalars['Float']>;
  estimateType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  itemId: Scalars['String'];
  netAmount?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  vatAmount?: InputMaybe<Scalars['Float']>;
};

export type NegotiatorModel = {
  __typename?: 'NegotiatorModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedNegotiatorModel>;
  _links?: Maybe<Scalars['JSON']>;
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  mobilePhone?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  officeId?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export enum NegotiatorQueryEmbed {
  Office = 'office'
}

export type OfferAddress = {
  __typename?: 'OfferAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type OfferModel = {
  __typename?: 'OfferModel';
  OfferId?: Maybe<Scalars['String']>;
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedOfferModel>;
  _links?: Maybe<Scalars['JSON']>;
  amount?: Maybe<Scalars['String']>;
  applicantId?: Maybe<Scalars['String']>;
  conditions?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  exclusions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inclusions?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<OfferRelate>>>;
  status?: Maybe<Scalars['String']>;
};

export enum OfferQueryEmbed {
  Applicant = 'applicant',
  Conveyancing = 'conveyancing',
  Negotiator = 'negotiator',
  Property = 'property'
}

export type OfferRelate = {
  __typename?: 'OfferRelate';
  email?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<OfferAddress>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type OfficeModel = {
  __typename?: 'OfficeModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedOfficeModel>;
  _links?: Maybe<Scalars['JSON']>;
  address?: Maybe<OfficeModelAddress>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type OfficeModelAddress = {
  __typename?: 'OfficeModelAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type OfficeModelAddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export enum OfficeQueryEmbed {
  Negotiators = 'negotiators'
}

export type PagedResultApplicantContactRelationshipModel = {
  __typename?: 'PagedResultApplicantContactRelationshipModel';
  _embedded?: Maybe<Array<Maybe<ApplicantContactRelationshipModel>>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultApplicantModel = {
  __typename?: 'PagedResultApplicantModel';
  _embedded?: Maybe<Array<ApplicantModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultAppointmentModel = {
  __typename?: 'PagedResultAppointmentModel';
  _embedded?: Maybe<Array<AppointmentModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultAreaModel = {
  __typename?: 'PagedResultAreaModel';
  _embedded?: Maybe<Array<AreaModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultContactModel = {
  __typename?: 'PagedResultContactModel';
  _embedded?: Maybe<Array<ContactModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultDocumentModel = {
  __typename?: 'PagedResultDocumentModel';
  _embedded?: Maybe<Array<DocumentModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultEnquiryModel = {
  __typename?: 'PagedResultEnquiryModel';
  _embedded?: Maybe<Array<EnquiryModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultIdentityCheckModel = {
  __typename?: 'PagedResultIdentityCheckModel';
  _embedded?: Maybe<Array<IdentityCheckModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultLandlordModel = {
  __typename?: 'PagedResultLandlordModel';
  _embedded?: Maybe<Array<LandlordModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultLandlordRelationshipModel = {
  __typename?: 'PagedResultLandlordRelationshipModel';
  _embedded?: Maybe<Array<LandlordRelationshipModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultNegotiatorModel = {
  __typename?: 'PagedResultNegotiatorModel';
  _embedded?: Maybe<Array<NegotiatorModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultOfferModel = {
  __typename?: 'PagedResultOfferModel';
  _embedded?: Maybe<Array<OfferModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultOfficeModel = {
  __typename?: 'PagedResultOfficeModel';
  _embedded?: Maybe<Array<OfficeModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultPropertyImageModel = {
  __typename?: 'PagedResultPropertyImageModel';
  _embedded?: Maybe<Array<PropertyImageModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultPropertyModel = {
  __typename?: 'PagedResultPropertyModel';
  _embedded?: Maybe<Array<PropertyModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultSourceModel = {
  __typename?: 'PagedResultSourceModel';
  _embedded?: Maybe<Array<SourceModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultTaskModel = {
  __typename?: 'PagedResultTaskModel';
  _embedded?: Maybe<Array<Maybe<TaskModel>>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultTenancies = {
  __typename?: 'PagedResultTenancies';
  _embedded?: Maybe<Array<TenancyModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultTenancyChecks = {
  __typename?: 'PagedResultTenancyChecks';
  _embedded?: Maybe<Array<TenancyCheckModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultTenancyRelationships = {
  __typename?: 'PagedResultTenancyRelationships';
  _embedded?: Maybe<Array<PagedResultTenancyRelationshipsEmbedded>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultTenancyRelationshipsEmbedded = {
  __typename?: 'PagedResultTenancyRelationshipsEmbedded';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['String']>;
  tenancyId?: Maybe<Scalars['String']>;
};

export type PagedResultVendorModel = {
  __typename?: 'PagedResultVendorModel';
  _embedded?: Maybe<Array<VendorModel>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultVendorRelationshipModel = {
  __typename?: 'PagedResultVendorRelationshipModel';
  _embedded?: Maybe<Array<VendorRelationship>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagedResultWorksOrderItem = {
  __typename?: 'PagedResultWorksOrderItem';
  _embedded?: Maybe<Array<WorksOrderItem>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PagedResultWorksOrders = {
  __typename?: 'PagedResultWorksOrders';
  _embedded?: Maybe<Array<WorkOrder>>;
  _links?: Maybe<Scalars['JSON']>;
  pageCount?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPageCount?: Maybe<Scalars['Int']>;
};

export type PropertyImageModel = {
  __typename?: 'PropertyImageModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedPropertyImageModel>;
  _links?: Maybe<Scalars['JSON']>;
  caption?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  propertyId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum PropertyImageQueryEmbed {
  Property = 'property'
}

export type PropertyModeLetting = {
  __typename?: 'PropertyModeLetting';
  agentRole?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['String']>;
  availableTo?: Maybe<Scalars['String']>;
  brochureId?: Maybe<Scalars['String']>;
  furnishing?: Maybe<Array<Scalars['String']>>;
  instructed?: Maybe<Scalars['String']>;
  landlordId?: Maybe<Scalars['String']>;
  lettingFee?: Maybe<PropertyModelLettingFee>;
  managementFee?: Maybe<PropertyModelManagementFee>;
  rent?: Maybe<Scalars['Float']>;
  rentFrequency?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  term?: Maybe<Scalars['String']>;
};

export type PropertyModel = {
  __typename?: 'PropertyModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedPropertyModel>;
  _links?: Maybe<Scalars['JSON']>;
  address?: Maybe<PropertyModelAddress>;
  age?: Maybe<Array<Scalars['String']>>;
  alternateId?: Maybe<Scalars['String']>;
  archivedOn?: Maybe<Scalars['String']>;
  areaId?: Maybe<Scalars['String']>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  councilTax?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  epc?: Maybe<PropertyModelEpc>;
  externalArea?: Maybe<PropertyModelExternalArea>;
  fromArchive?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  internalArea?: Maybe<PropertyModelInternalArea>;
  internetAdvertising?: Maybe<Scalars['Boolean']>;
  keys?: Maybe<Array<Maybe<KeyModel>>>;
  letting?: Maybe<PropertyModeLetting>;
  locality?: Maybe<Array<Scalars['String']>>;
  longDescription?: Maybe<Scalars['String']>;
  lostInstructionDate?: Maybe<Scalars['String']>;
  lostInstructionNote?: Maybe<Scalars['String']>;
  marketingMode?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  officeIds?: Maybe<Array<Scalars['String']>>;
  parking?: Maybe<Array<Scalars['String']>>;
  receptions?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Array<PropertyRoomModel>>;
  selling?: Maybe<PropertyModelSelling>;
  situation?: Maybe<Array<Scalars['String']>>;
  strapline?: Maybe<Scalars['String']>;
  style?: Maybe<Array<Scalars['String']>>;
  summary?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Scalars['String']>>;
  video2Caption?: Maybe<Scalars['String']>;
  video2Url?: Maybe<Scalars['String']>;
  videoCaption?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
  viewingArrangements?: Maybe<Scalars['String']>;
};

export type PropertyModelAddress = {
  __typename?: 'PropertyModelAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  geolocation?: Maybe<PropertyModelAddressGeolocation>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type PropertyModelAddressGeolocation = {
  __typename?: 'PropertyModelAddressGeolocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PropertyModelEpc = {
  __typename?: 'PropertyModelEpc';
  eer?: Maybe<Scalars['Int']>;
  eerPotential?: Maybe<Scalars['Int']>;
  eir?: Maybe<Scalars['Int']>;
  eirPotential?: Maybe<Scalars['Int']>;
  exempt?: Maybe<Scalars['Boolean']>;
};

export type PropertyModelExternalArea = {
  __typename?: 'PropertyModelExternalArea';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type PropertyModelFee = {
  __typename?: 'PropertyModelFee';
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PropertyModelInternalArea = {
  __typename?: 'PropertyModelInternalArea';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type PropertyModelLettingFee = {
  __typename?: 'PropertyModelLettingFee';
  amount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type PropertyModelManagementFee = {
  __typename?: 'PropertyModelManagementFee';
  amount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type PropertyModelSelling = {
  __typename?: 'PropertyModelSelling';
  agency?: Maybe<Scalars['String']>;
  brochureId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  disposal?: Maybe<Scalars['String']>;
  exchanged?: Maybe<Scalars['String']>;
  fee?: Maybe<PropertyModelFee>;
  instructed?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qualifier?: Maybe<Scalars['String']>;
  recommendedPrice?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tenure?: Maybe<PropertyModelSellingTenure>;
  vendorId?: Maybe<Scalars['String']>;
};

export type PropertyModelSellingTenure = {
  __typename?: 'PropertyModelSellingTenure';
  expiry?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum PropertyQueryEmbed {
  Appointments = 'appointments',
  Area = 'area',
  Department = 'department',
  Documents = 'documents',
  Images = 'images',
  Landlord = 'landlord',
  Negotiator = 'negotiator',
  Offers = 'offers',
  Tenancies = 'tenancies',
  Vendor = 'vendor'
}

export type PropertyRoomModel = {
  __typename?: 'PropertyRoomModel';
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetApplicantById: ApplicantModel;
  GetApplicantRelationshipById: ApplicantContactRelationshipModel;
  GetApplicantRelationships: PagedResultApplicantContactRelationshipModel;
  GetApplicants: PagedResultApplicantModel;
  GetAppointmentById: AppointmentModel;
  GetAppointments: PagedResultAppointmentModel;
  GetAreaById: AreaModel;
  GetAreas: PagedResultAreaModel;
  GetCompanies: CompanyModelPagedResult;
  GetCompanyById: CompanyModel;
  GetCompanyRoles: CompanyRoleModelPagedResult;
  GetConfigurationByTypeAndId?: Maybe<ListItemModel>;
  GetConfigurationsByType?: Maybe<Array<Maybe<ListItemModel>>>;
  GetContactById: ContactModel;
  GetContacts: PagedResultContactModel;
  GetConveyancing: ConveyancingModelPagedResult;
  GetConveyancingById: ConveyancingModel;
  GetConveyancingChain: ConveyancingModelPagedResult;
  GetDepartmentById: DepartmentModel;
  GetDepartments: DepartmentModelPagedResult;
  GetDocumentById: DocumentModel;
  GetDocuments: PagedResultDocumentModel;
  GetEnquiries: PagedResultEnquiryModel;
  GetEnquiryById: EnquiryModel;
  GetIdentityCheckById: IdentityCheckModel;
  GetIdentityChecks: PagedResultIdentityCheckModel;
  GetJournalEntries: JournalEntryModelPagedResult;
  GetKey?: Maybe<KeyModel>;
  GetKeyMovement?: Maybe<KeyMovementModel>;
  GetKeyMovements?: Maybe<Array<Maybe<KeyMovementModel>>>;
  GetLandlordById: LandlordModel;
  GetLandlordRelationshipById: LandlordRelationshipModel;
  GetLandlordRelationships: PagedResultLandlordRelationshipModel;
  GetLandlords: PagedResultLandlordModel;
  GetNegotiatorById: NegotiatorModel;
  GetNegotiators: PagedResultNegotiatorModel;
  GetOfferById: OfferModel;
  GetOffers: PagedResultOfferModel;
  GetOfficeById: OfficeModel;
  GetOffices: PagedResultOfficeModel;
  GetProperties: PagedResultPropertyModel;
  GetPropertyById: PropertyModel;
  GetPropertyImageById: PropertyImageModel;
  GetPropertyImages: PagedResultPropertyImageModel;
  GetPropertyKeys?: Maybe<Array<Maybe<KeyModel>>>;
  GetSourceById: SourceModel;
  GetSources: PagedResultSourceModel;
  GetTaskById: TaskModel;
  GetTasks: PagedResultTaskModel;
  GetTenancies: PagedResultTenancies;
  GetTenancyById: TenancyModel;
  GetTenancyCheckById: TenancyCheckModel;
  GetTenancyChecks: PagedResultTenancyChecks;
  GetTenancyRelationships: PagedResultTenancyRelationships;
  GetVendorById: VendorModel;
  GetVendorRelationshipById?: Maybe<VendorRelationship>;
  GetVendorRelationships?: Maybe<PagedResultVendorRelationshipModel>;
  GetVendors: PagedResultVendorModel;
  GetWorksOrderItemById: WorksOrderItem;
  GetWorksOrderItems: PagedResultWorksOrderItem;
  GetWorksOrders: PagedResultWorksOrders;
  GetWorksOrdersById: WorkOrder;
  Ping: Scalars['String'];
};


export type QueryGetApplicantByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<ApplicantQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetApplicantRelationshipByIdArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type QueryGetApplicantRelationshipsArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetApplicantsArgs = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bedroomsFrom?: InputMaybe<Scalars['Int']>;
  bedroomsTo?: InputMaybe<Scalars['Int']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  departmentId?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<ApplicantQueryEmbed>>>;
  furnishing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastCallFrom?: InputMaybe<Scalars['String']>;
  lastCallTo?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketingMode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  negotiatorId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nextCallFrom?: InputMaybe<Scalars['String']>;
  nextCallTo?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  parking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priceFrom?: InputMaybe<Scalars['String']>;
  priceTo?: InputMaybe<Scalars['String']>;
  rentFrequency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rentFrom?: InputMaybe<Scalars['String']>;
  rentTo?: InputMaybe<Scalars['String']>;
  situation?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetAppointmentByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<AppointmentQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetAppointmentsArgs = {
  embed?: InputMaybe<Array<InputMaybe<AppointmentQueryEmbed>>>;
  end: Scalars['String'];
  id?: InputMaybe<Array<Scalars['String']>>;
  includeCancelled?: InputMaybe<Scalars['Boolean']>;
  includeUnconfirmed?: InputMaybe<Scalars['Boolean']>;
  negotiatorId?: InputMaybe<Array<Scalars['String']>>;
  officeId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  start: Scalars['String'];
  typeId?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetAreaByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetAreasArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  departmentId?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetCompaniesArgs = {
  address?: InputMaybe<Scalars['String']>;
  branch?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<CompanyQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCompanyByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<CompanyQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetCompanyRolesArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetConfigurationByTypeAndIdArgs = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ConfigurationType>;
};


export type QueryGetConfigurationsByTypeArgs = {
  type?: InputMaybe<ConfigurationType>;
};


export type QueryGetContactByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<ContactQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetContactsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<ContactQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  identityCheck?: InputMaybe<Scalars['String']>;
  marketingConsent?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  negotiatorId?: InputMaybe<Array<Scalars['String']>>;
  officeId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetConveyancingArgs = {
  embed?: InputMaybe<Array<InputMaybe<ConveyancingQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetConveyancingByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<ConveyancingQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetConveyancingChainArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetDepartmentByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetDepartmentsArgs = {
  id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDocumentByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<DocumentQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetDocumentsArgs = {
  associatedId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  associatedType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  embed?: InputMaybe<Array<InputMaybe<DocumentQueryEmbed>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetEnquiriesArgs = {
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  enquiryType?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetEnquiryByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetIdentityCheckByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<IdentityCheckQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetIdentityChecksArgs = {
  checkDateFrom?: InputMaybe<Scalars['String']>;
  checkDateTo?: InputMaybe<Scalars['String']>;
  contactId?: InputMaybe<Array<Scalars['String']>>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<IdentityCheckQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  negotiatorId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetJournalEntriesArgs = {
  associatedId?: InputMaybe<Array<Scalars['String']>>;
  associatedType?: InputMaybe<Array<Scalars['String']>>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  negotiatorId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetKeyArgs = {
  id: Scalars['ID'];
};


export type QueryGetKeyMovementArgs = {
  keyId: Scalars['ID'];
  movementId: Scalars['ID'];
  propertyId: Scalars['ID'];
};


export type QueryGetKeyMovementsArgs = {
  keyId: Scalars['ID'];
  propertyId: Scalars['ID'];
};


export type QueryGetLandlordByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<LandlordQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetLandlordRelationshipByIdArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type QueryGetLandlordRelationshipsArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetLandlordsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<LandlordQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetNegotiatorByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<NegotiatorQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetNegotiatorsArgs = {
  embed?: InputMaybe<Array<InputMaybe<NegotiatorQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetOfferByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<OfferQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetOffersArgs = {
  address?: InputMaybe<Scalars['String']>;
  amountFrom?: InputMaybe<Scalars['String']>;
  amountTo?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateFrom?: InputMaybe<Scalars['String']>;
  dateTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<OfferQueryEmbed>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetOfficeByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<OfficeQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetOfficesArgs = {
  address?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<OfficeQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetPropertiesArgs = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Array<Scalars['String']>>;
  agentRole?: InputMaybe<Array<Scalars['String']>>;
  bedroomsFrom?: InputMaybe<Scalars['Int']>;
  bedroomsTo?: InputMaybe<Scalars['Int']>;
  departmentId?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<PropertyQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  internetAdvertising?: InputMaybe<Scalars['Boolean']>;
  landlordId?: InputMaybe<Array<Scalars['String']>>;
  lettingStatus?: InputMaybe<Array<Scalars['String']>>;
  locality?: InputMaybe<Array<Scalars['String']>>;
  marketingMode?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  parking?: InputMaybe<Array<Scalars['String']>>;
  priceFrom?: InputMaybe<Scalars['Int']>;
  priceTo?: InputMaybe<Scalars['Int']>;
  rentFrequency?: InputMaybe<Array<Scalars['String']>>;
  rentFrom?: InputMaybe<Scalars['Float']>;
  rentTo?: InputMaybe<Scalars['Float']>;
  sellingStatus?: InputMaybe<Array<Scalars['String']>>;
  situation?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetPropertyByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<PropertyQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetPropertyImageByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<PropertyImageQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetPropertyImagesArgs = {
  embed?: InputMaybe<Array<InputMaybe<PropertyImageQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetPropertyKeysArgs = {
  propertyId: Scalars['String'];
};


export type QueryGetSourceByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetSourcesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  departmentId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGetTaskByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<TaskQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetTasksArgs = {
  activatesFrom?: InputMaybe<Scalars['String']>;
  activatesTo?: InputMaybe<Scalars['String']>;
  applicantId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<TaskQueryEmbed>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  landlordId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  officeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipientId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  senderId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<Scalars['String']>;
  tenancyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetTenanciesArgs = {
  applicantId?: InputMaybe<Array<Scalars['String']>>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<TenancyQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
  modifiedFrom?: InputMaybe<Scalars['String']>;
  modifiedTo?: InputMaybe<Scalars['String']>;
  negotiatorId?: InputMaybe<Array<Scalars['String']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetTenancyByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<TenancyQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetTenancyCheckByIdArgs = {
  checkId: Scalars['String'];
  id: Scalars['String'];
};


export type QueryGetTenancyChecksArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTenancyRelationshipsArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVendorByIdArgs = {
  embed?: InputMaybe<Array<InputMaybe<VendorQueryEmbed>>>;
  id: Scalars['String'];
};


export type QueryGetVendorRelationshipByIdArgs = {
  id: Scalars['String'];
  relationshipId: Scalars['String'];
};


export type QueryGetVendorRelationshipsArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVendorsArgs = {
  address?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<VendorQueryEmbed>>>;
  id?: InputMaybe<Array<Scalars['String']>>;
  lastCallFrom?: InputMaybe<Scalars['String']>;
  lastCallTo?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  negotiatorId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nextCallFrom?: InputMaybe<Scalars['String']>;
  nextCallTo?: InputMaybe<Scalars['String']>;
  officeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetWorksOrderItemByIdArgs = {
  id: Scalars['String'];
  itemId: Scalars['String'];
};


export type QueryGetWorksOrderItemsArgs = {
  id: Scalars['String'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWorksOrdersArgs = {
  companyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  completedFrom?: InputMaybe<Scalars['String']>;
  completedTo?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  createdTo?: InputMaybe<Scalars['String']>;
  embed?: InputMaybe<Array<InputMaybe<WorksOrdersEmbed>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Scalars['JSON']>;
  negotiatorId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredFrom?: InputMaybe<Scalars['String']>;
  requiredTo?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<WorksOrdersStatus>>>;
  tenancyId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetWorksOrdersByIdArgs = {
  embed?: InputMaybe<WorksOrdersEmbed>;
  id: Scalars['String'];
};

export type SellingInput = {
  completed?: InputMaybe<Scalars['String']>;
  exchanged?: InputMaybe<Scalars['String']>;
  instructed?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  qualifier?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tenure?: InputMaybe<SellingInputTenureInput>;
};

export type SellingInputTenureInput = {
  expiry?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type SourceModel = {
  __typename?: 'SourceModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  created?: Maybe<Scalars['String']>;
  departmentIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  officeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type TaskModel = {
  __typename?: 'TaskModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedTaskModel>;
  _links?: Maybe<Scalars['JSON']>;
  activates?: Maybe<Scalars['String']>;
  applicantId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  landlordId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  recipientId?: Maybe<Scalars['String']>;
  recipientType?: Maybe<Scalars['String']>;
  senderId?: Maybe<Scalars['String']>;
  tenancyId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export enum TaskQueryEmbed {
  Applicant = 'applicant',
  Contact = 'contact',
  Landlord = 'landlord',
  Property = 'property',
  Tenancy = 'tenancy',
  Type = 'type'
}

export type TenancyCheckModel = {
  __typename?: 'TenancyCheckModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenancyId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type TenancyModel = {
  __typename?: 'TenancyModel';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<EmbeddedTenancyModel>;
  _links?: Maybe<Scalars['JSON']>;
  agentRole?: Maybe<Scalars['String']>;
  applicantId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  endDateConfirmed?: Maybe<Scalars['Boolean']>;
  fromArchive?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isPeriodic?: Maybe<Scalars['Boolean']>;
  meterReadingElecticityLastRead?: Maybe<Scalars['String']>;
  meterReadingElectricity?: Maybe<Scalars['String']>;
  meterReadingGas?: Maybe<Scalars['String']>;
  meterReadingGasLastRead?: Maybe<Scalars['String']>;
  meterReadingWater?: Maybe<Scalars['String']>;
  meterReadingWaterLastRead?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  related?: Maybe<Array<TenancyRelatedModel>>;
  rent?: Maybe<Scalars['Int']>;
  rentFrequency?: Maybe<Scalars['String']>;
  rentInstalmentStart?: Maybe<Scalars['String']>;
  rentInstalmentsAmount?: Maybe<Scalars['Float']>;
  rentInstalmentsFrequency?: Maybe<Scalars['String']>;
  source?: Maybe<TenancySourceModel>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type TenancyPrimaryAddressModel = {
  __typename?: 'TenancyPrimaryAddressModel';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export enum TenancyQueryEmbed {
  Applicant = 'applicant',
  Appointments = 'appointments',
  Documents = 'documents',
  Negotiator = 'negotiator',
  Property = 'property',
  Source = 'source',
  Tasks = 'tasks',
  Type = 'type'
}

export type TenancyRelatedModel = {
  __typename?: 'TenancyRelatedModel';
  email?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  fromArchive?: Maybe<Scalars['Boolean']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<TenancyPrimaryAddressModel>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type TenancySourceModel = {
  __typename?: 'TenancySourceModel';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateAppointmentModelAttendeeInput = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateAppointmentModelFollowUpInput = {
  notes?: InputMaybe<Scalars['String']>;
  responseId?: InputMaybe<Scalars['String']>;
};

export type VendorAddress = {
  __typename?: 'VendorAddress';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

export type VendorModel = {
  __typename?: 'VendorModel';
  _eTag?: Maybe<Scalars['JSON']>;
  _embedded?: Maybe<EmbeddedVendorModel>;
  _links?: Maybe<Scalars['JSON']>;
  archivedOn?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  fromArchive?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  lastCall?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  nextCall?: Maybe<Scalars['String']>;
  officeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  propertyId?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<VendorRelate>>>;
  sellingReasonId?: Maybe<Scalars['String']>;
  solicitorId?: Maybe<Scalars['String']>;
  source?: Maybe<VendorSourceModel>;
  typeId?: Maybe<Scalars['String']>;
};

export enum VendorQueryEmbed {
  Negotiator = 'negotiator',
  Offices = 'offices',
  Property = 'property',
  SellingReason = 'sellingReason',
  Solicitor = 'solicitor',
  Source = 'source',
  Type = 'type'
}

export type VendorRelate = {
  __typename?: 'VendorRelate';
  email?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<VendorAddress>;
  type?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};

export type VendorRelationship = {
  __typename?: 'VendorRelationship';
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  associatedId?: Maybe<Scalars['String']>;
  associatedType?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
};

export type VendorSourceInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type VendorSourceModel = {
  __typename?: 'VendorSourceModel';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type WorkOrder = {
  __typename?: 'WorkOrder';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  booked?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<WorksOrderItem>>>;
  metadata?: Maybe<Scalars['JSON']>;
  modified?: Maybe<Scalars['String']>;
  negotiatorId?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  reporter?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenancyId?: Maybe<Scalars['String']>;
  totalGrossAmount?: Maybe<Scalars['Float']>;
  totalNetAmount?: Maybe<Scalars['Float']>;
  totalVatAmount?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['String']>;
};

export type WorksOrderItem = {
  __typename?: 'WorksOrderItem';
  _eTag?: Maybe<Scalars['String']>;
  _embedded?: Maybe<Scalars['JSON']>;
  _links?: Maybe<Scalars['JSON']>;
  chargeTo?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  estimate?: Maybe<Scalars['Float']>;
  estimateType?: Maybe<Scalars['String']>;
  grossAmount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  netAmount?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  vatAmount?: Maybe<Scalars['Float']>;
  worksOrderId?: Maybe<Scalars['String']>;
};

export enum WorksOrdersEmbed {
  Company = 'company',
  Documents = 'documents',
  Negotiator = 'negotiator',
  Property = 'property',
  Tenancy = 'tenancy',
  Type = 'type'
}

export enum WorksOrdersStatus {
  Cancelled = 'cancelled',
  Complete = 'complete',
  LandlordToComplete = 'landlordToComplete',
  PendingApproval = 'pendingApproval',
  PendingQuote = 'pendingQuote',
  Raised = 'raised',
  RaisedToChase = 'raisedToChase'
}

export type LettingInput = {
  agentRole?: InputMaybe<Scalars['String']>;
  availableFrom?: InputMaybe<Scalars['String']>;
  availableTo?: InputMaybe<Scalars['String']>;
  furnishing?: InputMaybe<Array<Scalars['String']>>;
  instructed?: InputMaybe<Scalars['String']>;
  rent?: InputMaybe<Scalars['Float']>;
  rentFrequency?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  term?: InputMaybe<Scalars['String']>;
};

export type PropertyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PropertyQueryQuery = { __typename?: 'Query', GetProperties: { __typename?: 'PagedResultPropertyModel', _embedded?: Array<{ __typename?: 'PropertyModel', id?: string | null | undefined, currency?: string | null | undefined, bedrooms?: number | null | undefined, bathrooms?: number | null | undefined, description?: string | null | undefined, negotiatorId?: string | null | undefined, selling?: { __typename?: 'PropertyModelSelling', price?: number | null | undefined } | null | undefined, address?: { __typename?: 'PropertyModelAddress', countryId?: string | null | undefined, line1?: string | null | undefined } | null | undefined }> | null | undefined } };


export const PropertyQueryDocument = `
    query PropertyQuery {
  GetProperties {
    _embedded {
      id
      currency
      selling {
        price
      }
      address {
        countryId
        line1
      }
      bedrooms
      bathrooms
      description
      negotiatorId
    }
  }
}
    `;
export const usePropertyQueryQuery = <
      TData = PropertyQueryQuery,
      TError = unknown
    >(
      variables?: PropertyQueryQueryVariables,
      options?: UseQueryOptions<PropertyQueryQuery, TError, TData>
    ) =>
    useQuery<PropertyQueryQuery, TError, TData>(
      variables === undefined ? ['PropertyQuery'] : ['PropertyQuery', variables],
      fetcher<PropertyQueryQuery, PropertyQueryQueryVariables>(PropertyQueryDocument, variables),
      options
    );