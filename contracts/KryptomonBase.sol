pragma solidity ^0.4.11;
import './KryptomonAccessControl.sol';

contract KryptomonBase is KryptomonAccessControl {
  /*** START Event Definitions ***/
  // The KryptomonHatch event is fired whenever a kryptomon egg is
  // hatched. This occurs whenever an egg owner calls the "hatch"
  // method resulting in a new Kryptomon.
  event KryptomonHatch();

  // The EggTransfer event is defined in current draft of ERC721. Every
  // time egg ownership is assigned, including when an egg is created.
  event EggTransfer();

  // The EggTransfer event is defined in current draft of ERC721. Every
  // time kryptomon ownership is assigned, including birth.
  event KryptomonTransfer();
  /*** END Event Definitions ***/

  /*** START Structs Definitions ***/
  // The main Egg struct.
  struct Egg {
    // The generation of the Kryptomon that will be hatched from this
    // egg. The generation is calculated as the max of the two parents'
    // generations (e.g. if parent1 is gen0 and parent 2 is gen9,
    // the child will be gen 9 as well).
    uint16 generation;

    // The id associated with the egg's matron. The Kryptomon are
    // slightly more likely to hatch into the same species as and to
    // have similar genes to their parents.
    uint32 matronId;

    // The id associated with the egg's sire. The Kryptomon are
    // slightly more likely to hatch into the same species as and to
    // have similar genes to their parents.
    uint32 sireId;
  }

  // The main Kryptomon struct.
  struct Kryptomon {
    // The id associated with the Kryptomon's species. All metadata
    // associated with the Kryptomon's species is stored in a separate
    // lookup table.
    uint16 speciesId;

    // A value between 0 and 200 that modifies the Kryptomon's stats.
    // A value of 0 results in a 10% decrease in base stats while a
    // value of 200 results in a 10% increase. Children are
    // predisposed to have similar genes as their parents but there is
    // an element of randomness in gene assignment.
    uint8 genes;

    // The Kryptomon's generation. Higher generation Kryptomon have
    // increasingly degredated base stats and take exponentially more
    // time to evolve.
    uint16 generation;

    // Initiated when the Kryptomon is hatched from an egg. Used by
    // various
    uint32 birthTimeStamp;

    // The minimum timestamp after which this Kryptomon can engage in
    // breeding activities again. Is based on a Kryptomon's species.
    uint32 breedingCooldown;

    // The number of eggs that this kryptomon has produced. Different
    // species of Kryptomon have different restrictions on how many
    // children they can have.
    uint16 numChildren;
  }

  struct Species {
    // Stat used to determine "physical" type attack potency.
    uint8 attack;

    // Stat used to determine effectiveness in defending against all
    // "physical" type attacks.
    uint8 defense;

    // Stat used to determine "special" type attack potency.
    uint8 specialAttack;

    // Stat used to determine effectiveness in defending against all
    // "special" type attacks.
    uint8 specialDefense;

    // A number of points representing how much damage a Kryptomon can
    // sustain before being knocked out.
    uint8 hitPoints;

    // Represents how frequently the Kryptomon can attack and the order
    // of attacks.
    uint8 speed;

    // The maximum number of children a Kryptomon can sire.
    uint8 maxChildren;

    // The amount of time a Kryptomon must wait before it can breed
    // again.
    uint32 breedingCooldown;

    // The ID for the species this type of Kryptomon will evolve into.
    // A non-zero value indicates this type of Kryptomon can evolve.
    uint8 evolveToId;

    // Base amount time it takes for this Kryptomon to evolve. Actual
    // evolution time is also based on Kryptomon's generation.
    uint32 timeToEvolve;
  }
  /*** END Struct Definitions ***/

  /*** START Storage ***/
  // An array containing the egg struct for all eggs in existence. Each
  // egg's ID is actually an index in this array. 
  Egg[] eggList;

  // An array containing the Kryptomon struct for all Kryptomon in
  // existence. The ID of each Kryptomon is actually an index in this
  // array. Note that the ID 0 is the Kryptogod, the creator of all
  // Kryptomon who produced all gen1 Kryptomon through a divine act of
  // parthogenesis. Kryptomon ID 0 should be considered invalid.
  Kryptomon[] kryptomonList;

  /*** END Storage ***/

  /*** START Species Definitions ***/

  /*** END Species Definitions ***/

}
