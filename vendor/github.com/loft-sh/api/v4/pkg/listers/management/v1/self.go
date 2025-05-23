// Code generated by lister-gen. DO NOT EDIT.

package v1

import (
	managementv1 "github.com/loft-sh/api/v4/pkg/apis/management/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	listers "k8s.io/client-go/listers"
	cache "k8s.io/client-go/tools/cache"
)

// SelfLister helps list Selves.
// All objects returned here must be treated as read-only.
type SelfLister interface {
	// List lists all Selves in the indexer.
	// Objects returned here must be treated as read-only.
	List(selector labels.Selector) (ret []*managementv1.Self, err error)
	// Get retrieves the Self from the index for a given name.
	// Objects returned here must be treated as read-only.
	Get(name string) (*managementv1.Self, error)
	SelfListerExpansion
}

// selfLister implements the SelfLister interface.
type selfLister struct {
	listers.ResourceIndexer[*managementv1.Self]
}

// NewSelfLister returns a new SelfLister.
func NewSelfLister(indexer cache.Indexer) SelfLister {
	return &selfLister{listers.New[*managementv1.Self](indexer, managementv1.Resource("self"))}
}
