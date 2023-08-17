import { ChooseList } from "../../../../components";

const familyMembers = [
  { text: "When you have children, you are a", id: 1 },
  { text: "If you are a male parent, you are a", id: 2 },
  { text: "If you are female parent, you are a", id: 3 },
  { text: "If one of your children is a boy, he is your", id: 4 },
  { text: "If one of your children is a girl, she is your", id: 5 },
  { text: "When a couple gets married, the man is the", id: 6 },
  { text: "When a couple gets married, the woman is the", id: 7 },
  { text: "A brother and sister both have the same parents", id: 8 },
];

const answers = [
  { text: "daughter", id: 5 },
  { text: "wife", id: 7 },
  { text: "siblings", id: 8 },
  { text: "father", id: 2 },
  { text: "husband", id: 6 },
  { text: "son", id: 4 },
  { text: "parent", id: 1 },
  { text: "mother", id: 3 },
];

const relatives = [
  {
    text: "The parents of your parents:",
    id: 1,
  },
  {
    text: "The father of your father/mother:",
    id: 2,
  },
  {
    text: "The mother of your father/mother:",
    id: 3,
  },
  {
    text: "The children of your children:",
    id: 4,
  },
  {
    text: "The son of one of your children:",
    id: 5,
  },
  {
    text: "The daughter of one of your children:",
    id: 6,
  },
  {
    text: "The father of your grandfather/grandmother:",
    id: 7,
  },
  {
    text: "The mother of your grandfather/grandmother:",
    id: 8,
  },
  {
    text: "The brother of your mother/father:",
    id: 9,
  },
  {
    text: "The sister of your mother/father:",
    id: 10,
  },
  {
    text: "The child of your aunt/uncle:",
    id: 11,
  },
  {
    text: "The male child of your brother/sister:",
    id: 12,
  },
  {
    text: "The female child of your brother/sister:",
    id: 13,
  },
];

const relativesAnswers = [
  {
    text: "granddaughter",
    id: 6,
  },
  {
    text: "grandfather",
    id: 2,
  },
  {
    text: "cousin",
    id: 11,
  },
  {
    text: "grandmother",
    id: 3,
  },
  {
    text: "grandparents",
    id: 1,
  },
  {
    text: "niece",
    id: 13,
  },
  {
    text: "grandson",
    id: 5,
  },
  {
    text: "uncle",
    id: 9,
  },
  {
    text: "great grandmother",
    id: 8,
  },
  {
    text: "grandchildren",
    id: 4,
  },
  {
    text: "aunt",
    id: 10,
  },
  {
    text: "nephew",
    id: 12,
  },
  {
    text: "great grandfather",
    id: 7,
  },
];

const inLaws = [
  {
    text: "father-in-law:",
    id: 1,
  },
  {
    text: "mother-in-law:",
    id: 2,
  },
  {
    text: "son-in-law:",
    id: 3,
  },
  {
    text: "daughter-in-law:",
    id: 4,
  },
  {
    text: "brother-in-law:",
    id: 5,
  },
  {
    text: "sister-in-law:",
    id: 6,
  },
];

const inLawsAnswers = [
  {
    text: "the wife of your son",
    id: 4,
  },
  {
    text: "the wife of your brother",
    id: 6,
  },
  {
    text: "the husband of your daughter",
    id: 3,
  },
  {
    text: "the father of your spouse",
    id: 1,
  },
  {
    text: "the husband of your sister",
    id: 5,
  },
  {
    text: "the mother of your spouse",
    id: 2,
  },
];

const familyMix = [
  {
    text: "stepfather:",
    id: 1,
  },
  {
    text: "stepmother:",
    id: 2,
  },
  {
    text: "stepson:",
    id: 3,
  },
  {
    text: "stepdaughter:",
    id: 4,
  },
  {
    text: "stepsister:",
    id: 5,
  },
  {
    text: "stepbrother:",
    id: 6,
  },
  {
    text: "half-brother:",
    id: 7,
  },
  {
    text: "half-sister:",
    id: 8,
  },
];

const mixAnswers = [
  {
    text: "the daughter of your (new) husband / wife (she is not your biological daughter)",
    id: 4,
  },
  {
    text: "the brother you have only one parent in common with",
    id: 7,
  },
  {
    text: "the son of your stepmother or stepfather",
    id: 6,
  },
  {
    text: "the son of your (new) husband / wife (he is not your biological son)",
    id: 3,
  },
  {
    text: "the (new) husband of your mother but not your biological father",
    id: 1,
  },
  {
    text: "the daughter of your stepmother or stepfather",
    id: 5,
  },
  {
    text: "the sister you only have one parent in common with",
    id: 8,
  },
  {
    text: "the (new) wife of your father but not your biological mother",
    id: 2,
  },
];

export function FamilyVocabulary() {
  return (
    <div className="p-12 w-full flex flex-col items-center bg-slate-100">
      <h2 className="font-bold text-blue-900">Immediate Family</h2>

      <ChooseList questions={familyMembers} answers={answers} />

      <h2 className="font-bold text-blue-900 mt-5">
        Relatives and Extended Family
      </h2>

      <ChooseList questions={relatives} answers={relativesAnswers} />

      <h2 className="font-bold text-blue-900 mt-5 mb-2">The In-Laws</h2>
      <p>
        The in-laws are the members of the family of your spouse (the person you
        are married to) or via a marriage in your family:
      </p>

      <ChooseList questions={inLaws} answers={inLawsAnswers} />

      <p>
        Note: To refer to more than one brother-in-law or sister-in-law etc. we
        has an S to the brother/sister part. e.g. My brothers-in-law are fun. My
        sisters-in-laws are crazy.
      </p>

      <h2 className="font-bold text-blue-900 mt-5 mb-2">The Family Mix</h2>

      <p>
        {`Nowadays in many countries a person can get married more than once.
        These are the terms used to describe the "new" members of the family
        when someone gets remarried. "Step-" means that you are related as a
        result of one parent marrying again. Sometimes one of your parents 
        gets married again and they have more children.`}
      </p>

      <ChooseList questions={familyMix} answers={mixAnswers} />

      <p className="mb-6">
        {`Even if your parent didn't get married (and had the child outside of
        marriage), they are still your half-brother or half-sister. However,
        note that it is common to still call your half-brother or half-sister
        just your brother or sister (without adding the half- part).`}
      </p>
    </div>
  );
}
