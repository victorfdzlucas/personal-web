import { companies, companiesText } from "../config";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
import Image from "next/image";

export default function Companies() {
  return (
    <div className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2">
      <SectionTitle>Experience</SectionTitle>
      {companiesText?.length > 0 ? <SectionText>{companiesText}</SectionText> : null}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            {company.logo ? (
              <div className="flex h-12 w-full items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={240}
                  height={80}
                  unoptimized
                  className="h-full w-auto object-contain"
                />
              </div>
            ) : null}

            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-slate-700">
                {company.name}
              </p>
              {company.role ? (
                <p className="mt-1 text-xs text-slate-600">{company.role}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
