import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getLeads().map(lead => {
      return db.lead.create({ data: lead });
    })
  );
}

seed();

function getLeads() {
  return [
    {
      firstName: 'Robert',
      lastName: 'Johnson'
    },
    {
      firstName: 'Etta',
      lastName: 'James'
    },
    {
      firstName: 'Louis',
      lastName: 'Armstrong'
    },
    {
      firstName: 'Duke',
      lastName: 'Ellington'
    },
    {
      firstName: 'Ella',
      lastName: 'Fitzgerald'
    },
    {
      firstName: 'Bo',
      lastName: 'Diddley'
    },
    {
      firstName: 'Elmore',
      lastName: 'James'
    }
  ];
}