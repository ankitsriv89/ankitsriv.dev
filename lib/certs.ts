export type Cert = {
  id: string;
  name: string;
  issuer: string;
  issuerShort: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
  tags: string[];
};

export async function getCerts(): Promise<Cert[]> {
  const data = await import("@/content/certifications/certs.json");
  return data.default as Cert[];
}
