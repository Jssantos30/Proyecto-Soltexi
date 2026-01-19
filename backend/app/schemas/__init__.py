# Schemas module
from app.schemas.candidate import (
    CandidateCreate,
    CandidateResponse,
    CandidateListResponse
)
from app.schemas.pqrs import (
    PQRSCreate,
    PQRSResponse,
    PQRSListResponse
)

__all__ = [
    "CandidateCreate",
    "CandidateResponse", 
    "CandidateListResponse",
    "PQRSCreate",
    "PQRSResponse",
    "PQRSListResponse"
]
