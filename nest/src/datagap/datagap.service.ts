import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataGap, Prisma } from '@prisma/client';


const likeoperator = (obj) =>{
  let arrange = {}
  for(let element of Object.keys(obj)){
    arrange[element] = {'contains':obj[element]}
  }
  return arrange
}

@Injectable()
export class DatagapService {
  constructor(public prisma: PrismaService) {}

  FindManyGap(params:any): Promise<dataGap[] | null> {
    
    const { ...whereParams } = params['params'];
    
    if('wildcards'in params){
      const {...wildcards } = params['wildcards']
      let wc = likeoperator(wildcards)
      
      return this.prisma.dataGap.findMany({

        where: { ...whereParams,  ...wc },

      });

    } else {
      return this.prisma.dataGap.findMany({

        where: { ...whereParams },

      });
    }
    
    
  }
}
/*
SELECT "public_test"."dataGap"."rid", 
        "public_test"."dataGap"."PrimaryKey", 
        "public_test"."dataGap"."DBKey", 
        "public_test"."dataGap"."ProjectKey", 
        "public_test"."dataGap"."RecType", 
        "public_test"."dataGap"."SeqNo", 
        "public_test"."dataGap"."GapStart", 
        "public_test"."dataGap"."GapEnd", 
        "public_test"."dataGap"."Gap", 
        "public_test"."dataGap"."LineKey", 
        "public_test"."dataGap"."RecKey", 
        "public_test"."dataGap"."FormDate", 
        "public_test"."dataGap"."DateModified", 
        "public_test"."dataGap"."FormType", 
        "public_test"."dataGap"."Direction", 
        "public_test"."dataGap"."Measure", 
        "public_test"."dataGap"."LineLengthAmount", 
        "public_test"."dataGap"."GapMin", 
        "public_test"."dataGap"."GapData", 
        "public_test"."dataGap"."PerennialsCanopy", 
        "public_test"."dataGap"."AnnualGrassesCanopy", 
        "public_test"."dataGap"."AnnualForbsCanopy", 
        "public_test"."dataGap"."OtherCanopy", 
        "public_test"."dataGap"."Notes", 
        "public_test"."dataGap"."NoCanopyGaps", 
        "public_test"."dataGap"."NoBasalGaps", 
        "public_test"."dataGap"."DateLoadedInDb", 
        "public_test
*/